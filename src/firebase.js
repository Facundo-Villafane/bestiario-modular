import { initializeApp } from "firebase/app";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from "firebase/auth";
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
const googleProvider = new GoogleAuthProvider();

getRedirectResult(auth).catch(() => {
  // If there is no pending redirect result, Firebase rejects quietly in some browsers.
});

export function subscribeToAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function signInWithGoogle() {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    if (error.code === "auth/popup-blocked" || error.code === "auth/cancelled-popup-request") {
      await signInWithRedirect(auth, googleProvider);
      return null;
    }
    throw error;
  }
}

export function signOutGoogle() {
  return signOut(auth);
}

function requireUser() {
  if (!auth.currentUser) {
    throw new Error("Inicia sesion con Google para sincronizar tus criaturas.");
  }
  return auth.currentUser;
}

export async function saveCreatureToCloud(creature, enhanced = "") {
  const user = requireUser();
  const payload = {
    ...creature,
    enhanced,
    uid: user.uid,
    userEmail: user.email || "",
    userName: user.displayName || "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  const saved = await addDoc(creaturesRef, payload);
  return { ...payload, id: saved.id, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
}

export async function loadCloudCreatures() {
  const user = requireUser();
  const q = query(
    creaturesRef,
    where("uid", "==", user.uid),
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
