Proyecto Final Node
Backend del Proyecto Final (Node.js + Express + Firestore).

Estructura
Bash

proyecto_final_node/
├─ server.js
├─ vercel.json
├─ package.json
└─ src/
   ├─ controllers/
   │  ├─ auth.controllers.js
   │  └─ products.controllers.js
   ├─ data/
   │  └─ data.js
   ├─ midleware/
   │  └─ authentication.js
   ├─ models/
   │  └─ products.models.js
   ├─ routes/
   │  ├─ auth.routes.js
   │  └─ products.routes.js
   └─ services/
      └─ products.services.js
Tecnologías
Node.js (ESM)

Express

Firebase Firestore

JWT

CORS

dotenv

Instalación y Configuración
Instalar dependencias:

Bash

npm install
Crear un archivo .env en la raíz con el siguiente contenido:

Fragmento de código

PORT=3000
JWT_SECRET_KEY=unSecretoSimple123

FIREBASE_API_KEY=AIzaSyCsnTgdkyIBynbaPHopkM9QPwughPyH4DU
FIREBASE_AUTH_DOMAIN=proyecto-final-node-684c0.firebaseapp.com
FIREBASE_PROJECT_ID=proyecto-final-node
FIREBASE_STORAGE_BUCKET=proyecto-final-node-684c0.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=478213126554
FIREBASE_APP_ID=1:478213126554:web:a16f00519693c93d97e223

CORS_ORIGIN=*
Ejecutar localmente:

Bash

npm start
Servidor: http://localhost:3000

Endpoints
Base URL (Prod): https://proyecto-final-node-puce.vercel.app

Auth
POST /auth/login

Body:

JSON

{ 
  "email": "admin@demo.com", 
  "password": "123456" 
}
Respuesta:

JSON

{ "type": "Bearer", "token": "<JWT>" }
Productos
GET /api/products — Público

GET /api/products/:id — Público

POST /api/products/create — Protegido Header: Authorization: Bearer <JWT>

Body:

JSON

{ 
  "title": "Gorra Azul", 
  "price": 150, 
  "category": "gorros", 
  "description": "", 
  "image": "" 
}
DELETE /api/products/:id — Protegido Header: Authorization: Bearer <JWT>

Links
Repo: GitHub

Producción: Vercel App
