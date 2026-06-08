import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  where,
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9uurxG9INqvXM3gk_bB6F9A7hsL5XbXM",
  authDomain: "maldito-esclavo.firebaseapp.com",
  projectId: "maldito-esclavo",
  storageBucket: "maldito-esclavo.firebasestorage.app",
  messagingSenderId: "512074167735",
  appId: "1:512074167735:web:f0bce2cc0b54e1ca69e432",
  measurementId: "G-9LP2Z2GPZX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const creaturesRef = collection(db, "creatures");

export function getClientId() {
  const key = "bestiario-argentino:client-id";
  let clientId = localStorage.getItem(key);
  if (!clientId) {
    clientId = crypto.randomUUID();
    localStorage.setItem(key, clientId);
  }
  return clientId;
}

async function getOwner() {
  try {
    const session = auth.currentUser || (await signInAnonymously(auth)).user;
    return { ownerField: "uid", ownerId: session.uid, authMode: "anonymous" };
  } catch {
    return { ownerField: "clientId", ownerId: getClientId(), authMode: "client" };
  }
}

export async function saveCreatureToCloud(creature, enhanced = "") {
  const owner = await getOwner();
  const payload = {
    ...creature,
    enhanced,
    [owner.ownerField]: owner.ownerId,
    authMode: owner.authMode,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  const saved = await addDoc(creaturesRef, payload);
  return { ...payload, id: saved.id, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
}

export async function loadCloudCreatures() {
  const owner = await getOwner();
  const q = query(
    creaturesRef,
    where(owner.ownerField, "==", owner.ownerId),
    limit(50)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => {
    const data = item.data();
    return {
      ...data,
      id: item.id,
      createdAt: data.createdAt?.toDate?.().toISOString?.() || data.createdAt || null,
      updatedAt: data.updatedAt?.toDate?.().toISOString?.() || data.updatedAt || null
    };
  }).sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

export async function deleteCloudCreature(id) {
  await deleteDoc(doc(db, "creatures", id));
}
