# EduManager – Smart Classroom Management System

<div>
<img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="EduManager Classroom System" width="100%" height="500px"/>
</div>

## 📚 Project Overview

**EduManager** is a backend system designed to **eliminate manual classroom operations** in colleges and universities.

It replaces traditional paper-based systems with a **modern digital platform** that manages:

* 📅 Class Scheduling
* ✅ Attendance Tracking
* 👩‍🏫 Faculty Management
* 👨‍🎓 Student Records
* 🏫 Department Management

The goal of EduManager is to **digitize classroom workflows**, improve **transparency**, and reduce **administrative workload**.

---

# ⚙️ Tech Stack

<h3>

* Node.js (>=20)
* TypeScript
* Express.js
* PostgreSQL (Neon Database)
* Drizzle ORM
* Better Auth
* Arcjet Security
* CORS
* Dotenv

</h3>

---

# 📦 Dependencies Used

<h3>

Backend Core

* express
* cors
* dotenv

Database

* drizzle-orm
* drizzle-kit
* @neondatabase/serverless

Authentication

* better-auth

Security & Monitoring

* @arcjet/node
* @arcjet/inspect
* apminsight

Development

* typescript
* tsx
* @types/node
* @types/express

</h3>

---

# 🧱 Core System Modules

<h3>

* Authentication System
* Student Management
* Faculty Management
* Department Management
* Class Scheduling
* Digital Attendance
* Security Middleware
* API Monitoring

</h3>

---

# 🗂 Project Folder Structure

```
EduManager
│
├── src
│   ├── config
│   │    └── db.ts
│   │
│   ├── controllers
│   │    └── auth.controller.ts
│   │
│   ├── routes
│   │    └── auth.routes.ts
│   │
│   ├── middleware
│   │    └── auth.middleware.ts
│   │
│   ├── schema
│   │    └── user.schema.ts
│   │
│   ├── utils
│   │    └── helpers.ts
│   │
│   └── index.ts
│
├── drizzle
│
├── dist
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

# 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/edumanager.git
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env`

```env
DATABASE_URL=your_database_url
PORT=5000
BETTER_AUTH_SECRET=your_secret
```

---

### 4️⃣ Generate Database Schema

```bash
npm run db:generate
```

---

### 5️⃣ Run Database Migration

```bash
npm run db:migrate
```

---

### 6️⃣ Start Development Server

```bash
npm run dev
```

---

# 🧾 Available Scripts

| Script                | Description               |
| --------------------- | ------------------------- |
| `npm run dev`         | Run server in development |
| `npm run build`       | Compile TypeScript        |
| `npm run start`       | Run production server     |
| `npm run db:generate` | Generate drizzle schema   |
| `npm run db:migrate`  | Run database migration    |

---

# 🔐 Authentication System

EduManager uses **Better Auth** for secure authentication.

Features include:

* User Registration
* Login
* Session Management
* Secure Token Handling

Example Authentication Route

```ts
app.use("/api/auth", authRoutes);
```

---

# 🗄 Database Layer (Drizzle ORM)

EduManager uses **Drizzle ORM** for database operations with **Neon PostgreSQL Serverless**.

Example Schema

```ts
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
});
```

---

# 🛡 Security Layer

EduManager integrates **Arcjet** to protect the API.

Security Features

* Rate limiting
* Bot protection
* Request inspection
* API monitoring

Example Middleware

```ts
import arcjet from "@arcjet/node";

const aj = arcjet({
  key: process.env.ARCJET_KEY
});
```

---

# 📡 API Example

### Create Student

```
POST /api/students
```

Body

```json
{
  "name": "Karthick",
  "department": "Computer Science",
  "year": 3
}
```

---

### Mark Attendance

```
POST /api/attendance
```

```json
{
  "studentId": 101,
  "classId": 203,
  "status": "present"
}
```

---

# 🎯 Future Features

EduManager will include:

* 📊 Attendance Analytics Dashboard
* 📱 Mobile Companion App
* 🧾 Automated Attendance Reports
* 🤖 AI Attendance Prediction
* 🏫 Multi-campus support

---

# 👨‍💻 Author

**Karthikeyan R**

Full Stack JavaScript Developer

Tech Stack:

* JavaScript
* TypeScript
* React.js
* Node.js
* Express.js
* PostgreSQL

---

# 🌟 Project Vision

EduManager aims to **digitize classroom operations** and eliminate outdated manual systems used in universities.

With EduManager institutions can:

* Reduce paperwork
* Improve accuracy
* Track attendance in real time
* Manage academic schedules efficiently

---

⭐ If you like this project, consider giving it a **star on GitHub**.

---


