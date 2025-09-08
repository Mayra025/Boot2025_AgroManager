# AgroManager - Sistema de Gestión Agricola
**Autores:**
  - Mayra Pachacama
  - Edison Picuasi

**Modulo IV - DevOps**
## Descripción
**AgroManager** es una aplicación web completa para la gestión de operaciones agrícolas que permite administrar inventario, controlar grupos de animales, gestionar ventas y monitorear cultivos. La aplicación está construida con el stack MERN (MongoDB, Express.js, React, Node.js) y ofrece una interfaz intuitiva para optimizar las operaciones de fincas y negocios agrícolas.
## Tecnologías Utilizadas
  - Frontend: React, Vite, Tailwind CSS, Axios
  - Backend: Node.js, Express.js
  - Base de Datos: MongoDB (MongoDB Atlas)
  - Autenticación: JWT (JSON Web Tokens)
  - Plataforma de Despliegue: Render
  - Control de Versiones: Git + GitHub
## Instrucciones de Ejecución
### Prerrequisitos
  - Node.js (v16 o superior)
  - MongoDB (local o MongoDB Atlas)
  - npm
### Instalación
1. Clonar el repositorio
```bash
git clone https://github.com/Mayra025/Boot2025_AgroManager.git
cd Boot2025_AgroManager
```
2. Configurar el Backend
```bash
cd back
npm install
```
3. Configurar variables de entorno
```bash
MONGO_URI=<tu-URI-de-MongoDB>
PORT=5000
```
4. Iniciar el Backend
```bash
npm run server
```
5. Configurar el Frontend
```bash
cd ../front
npm install
```
6. Iniciar Frontend
```bash
npm start
```
## Proceso de Despliegue
1. Conectar el repositorio de GitHub a Render.
2. Configurar un Servicio Web con las siguientes especificaciones.
  - Runtime: Node
  - Build Command: npm install
  - Start Command: node index.js
  - Añadir las variable de entorno necesarias en el panel de Render
3. Crear un build de producción: npm run build
4. Configurar un Sitio Estatico que apunte al directorio front/.
5. Especificar el directorio de build: dist
6. Agregar las redirecciones para manejar el routing de React.
## Desafios y Soluciones
- Desafío: Las variables de entorno funcionaban localmente pero no en producción.
- Solución: Verificar y configurar todas las variables necesarias en el panel de Render, incluyendo la conexión a MongoDB Atlas y las URLs correctas para cada servicio.
