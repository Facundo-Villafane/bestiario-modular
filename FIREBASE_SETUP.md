# Firebase setup

La app usa Cloud Firestore para guardar criaturas.

## Recomendado

1. En Firebase Console, habilitar **Authentication > Sign-in method > Anonymous**.
2. Crear/activar **Cloud Firestore**.
3. Usar estas reglas:

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

Con esto, cada navegador/dispositivo crea un usuario anonimo y solo puede leer/borrar sus propias criaturas.

## Nota

La `apiKey` de Firebase en frontend no es secreta. La seguridad real esta en las reglas de Firestore.
