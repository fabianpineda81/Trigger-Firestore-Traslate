# 🔥 Firestore Trigger para Traducción Automática

Este es un **Cloud Function** desarrollado en **Node.js** que actúa como un **trigger en Firestore**. Su propósito es detectar cambios en los documentos de **To-Dos**, traducir automáticamente su título y descripción al inglés utilizando **Google Cloud Translation API**, y actualizar el documento con la traducción.

---

## 🚀 Características
- 📡 **Detecta cambios** en los documentos de Firestore.
- 🌍 **Traduce automáticamente** el título y la descripción de los To-Dos al inglés.
- 🔄 **Actualiza el documento** con la información traducida.
- ⚡ Desplegado como una **Cloud Function** en Firebase.

---

## 🛠️ Tecnologías y Herramientas
- **Firebase Functions** (Cloud Functions para Firestore)
- **Firestore** (Base de datos en tiempo real)
- **Google Cloud Translation API** (Servicio de traducción automática)
- **Node.js** (Entorno de ejecución)

---

## 📜 Instalación y Configuración
### 1️⃣ Requisitos previos
- Tener instalado **Node.js** y **Firebase CLI**.
- Un proyecto en **Firebase** con **Firestore habilitado**.
- **Google Cloud Translation API habilitada** en el proyecto de Firebase.

### 2️⃣ Clonar el repositorio
```sh
git clone <https://github.com/fabianpineda81/Trigger-Firestore-Traslate>

```

### 3️⃣ Instalar dependencias
```sh
npm install
```

### 4️⃣ Autenticarse en Firebase
```sh
firebase login
```

### 5️⃣ Desplegar la función en Firebase
```sh
firebase deploy --only functions
```

---

## ⚙️ Funcionamiento
1. Se agrega o actualiza un To-Do en **Firestore** en la colección `Todos/{userEmail}/userTodos/{todoId}`.
2. El **trigger de Firestore** detecta el cambio.
3. Extrae los campos `title` y `description`.
4. Utiliza **Google Cloud Translation API** para traducirlos al inglés.
5. Actualiza el mismo documento en Firestore con los campos `translatedTitle` y `translatedDescription`.

---


## 📄 Licencia
Este proyecto es solo para propósitos de prueba técnica y no tiene una licencia oficial.

---

### 📩 Contacto
Si tienes dudas o sugerencias, puedes contactarme en [https://www.linkedin.com/in/FabianPineda81/].

