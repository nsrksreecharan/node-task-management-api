# Task Management API

A RESTful Task Management API built with **Node.js**, **Express.js**, and **MongoDB**, following the **MVC architecture**. The API includes secure **JWT-based authentication** and supports **file uploads** using Multer.

## ✨ Features

* ✅ **MVC Architecture**: Clean separation using Controllers, Services, Models, and Routes.
* ✅ **Authentication**: JWT-based authentication to secure the API endpoints.
* ✅ **Protected Routes**: Only authenticated users can access and modify tasks.
* ✅ **File Uploads**: Upload attachments to tasks using Multer with **disk storage**.
* ✅ **Middleware Support**: Custom middleware for authentication and file uploads.
* ✅ **Modular Structure**: Organized and scalable project structure.

## 🔐 Authentication

* Users must **register** and **login** to receive a **JWT token**.
* The token must be included in the `Authorization` header (`Bearer <token>`) for accessing protected endpoints.

## 📦 File Uploads

* File uploads are handled via **Multer**.
* Files are stored in a local `/uploads` directory.
* Only authenticated users can upload files as attachments to tasks.

## 📁 Project Structure

```
task-manager-api/
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── uploads/
├── config/
├── utils/
└── server.js
└── app.js
```

## 🔧 Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (via Mongoose)
* **Authentication**: JSON Web Tokens (JWT)
* **File Uploads**: Multer (Disk Storage)

## 🚀 Getting Started

1. Clone the repository
2. Run `npm install`
3. Add your environment variables (e.g., Mongo URI, JWT secret) to `.env`
4. Start the server with `npm run dev` or `node server.js`
