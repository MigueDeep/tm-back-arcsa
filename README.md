# 🔐 Task Manager Backend (Node.js + Express + MySQL)

Este es el backend del proyecto **Task Manager**, una API RESTful construida con **Node.js**, **Express** y **MySQL**, que permite gestionar tareas por usuario con autenticación JWT.

---

## 🚀 Funcionalidades

- Registro e inicio de sesión de usuarios
- Autenticación segura con JWT
- Hash de contraseñas con bcrypt
- CRUD de tareas protegido por token
- Asociación de tareas por usuario autenticado
- Validaciones con Joi
- Control de errores estructurado

---

## 🧱 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Joi](https://joi.dev/)

---

## ⚙️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/MigueDeep/tm-front-arcsa.git
cd tm-front-arcsa
```

### 2. Instalar las dependencias

```bash
npm install
```

### 2. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto con este contenido:
```bash
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=task_manager
JWT_SECRET=supersecretkey
```

### 3. Ejecutar servidor

```bash
npm run dev
```

🗄️ Script de base de datos (MySQL con UUID)

```bash
CREATE DATABASE IF NOT EXISTS task_manager_arcsa;
USE task_manager_arcsa;

CREATE TABLE IF NOT EXISTS users (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS tasks (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  status ENUM('pendiente', 'completado') DEFAULT 'pendiente',
  user_id CHAR(36) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

```

🔒 Endpoints principales

🔐 Autenticación
POST /auth/register – Crear usuario

POST /auth/login – Obtener JWT

📋 Tareas (protegido con token)
GET /tasks – Listar tareas del usuario

POST /tasks – Crear nueva tarea

PUT /tasks/:id – Editar tarea existente

DELETE /tasks/:id – Eliminar tarea



