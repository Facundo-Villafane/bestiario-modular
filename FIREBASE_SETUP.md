# Firebase setup

La app usa Google Auth y Cloud Firestore para guardar criaturas por cuenta.

## Recomendado

1. En Firebase Console, habilitar **Authentication > Sign-in method > Google**.
2. En **Authentication > Settings > Authorized domains**, agregar `bestiario-fantastico.vercel.app`.
3. Crear/activar **Cloud Firestore**.
4. Usar estas reglas:

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /creatures/{creatureId} {
      allow create: if request.auth != null
        && request.resource.data.uid == request.auth.uid;

      allow read, update, delete: if request.auth != null
        && resource.data.uid == request.auth.uid;
    }
  }
}
```

Con esto, cada cuenta de Google solo puede leer, crear y borrar sus propias criaturas.

## Nota

La `apiKey` de Firebase en frontend no es secreta. La seguridad real esta en Google Auth y en las reglas de Firestore.
