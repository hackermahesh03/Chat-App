# 💬 Chat App

A full-stack, real-time chat application built using **Node.js**, **Express**, **MongoDB**, **Socket.io**, and **React**. This project enables users to exchange messages in real time with instant synchronization, message history persistence, delete-for-everyone, and message pinning.

---

## 🚀 Features

* ⚡ **Real-time Synchronization**: Powered by **Socket.io** for instantaneous message delivery across all connected clients.
* 💾 **Persistent Message History**: Messages are stored and retrieved from a **MongoDB** database.
* 📌 **Pin Messages**: Pin important messages to highlight them.
* 🗑️ **Delete for Everyone**: Soft-delete messages, hiding their contents for all participants.
* 📦 **Clean Monorepo Structure**: Separate `backend` (Express/Node) and `frontend` (React) modules.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | [React](https://reactjs.org/) | Component-based UI rendering |
| **Backend** | [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) | API Server and routing |
| **Database** | [MongoDB](https://www.mongodb.com/) (Mongoose) | Document-based data storage |
| **Real-time** | [Socket.io](https://socket.io/) | WebSockets for bi-directional real-time communication |

---

## 📂 Project Structure

```text
Chat_App/
├── backend/                # Node.js + Express backend server
│   ├── models/             # Mongoose schemas (e.g., Message)
│   ├── routes/             # API routing endpoints
│   ├── server.js           # Server entrypoint & Socket.io setup
│   └── package.json
├── frontend/               # React client application
│   ├── package.json
│   └── README.md
├── .gitignore              # Global git exclusions
├── package.json            # Workspace package file
└── README.md               # Main project documentation
```

---

## ⚙️ Setup & Installation

### Prerequisites
* [Node.js](https://nodejs.org/) (v16+ recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* A MongoDB connection string (local or MongoDB Atlas)

---

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Config connection string:
   * Currently, the MongoDB URI is configured in `server.js`.
   * *Security Tip:* It is highly recommended to move this connection string into a `.env` environment file.
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000`.

---

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

---

## 🔌 API Endpoints

The backend exposes the following REST APIs under `/messages`:

* `GET /messages` - Fetches all messages sorted chronologically.
* `POST /messages` - Creates and saves a new message.
* `PUT /messages/:id/delete` - Sets `isDeleted: true` on a message.
* `PUT /messages/:id/pin` - Toggles the `isPinned` state of a message.

---

## 🔒 Security Best Practices

> [!WARNING]
> Do not commit sensitive database credentials or access keys to GitHub. It is recommended to replace the hardcoded MongoDB connection string in `backend/server.js` with an environment variable:
> ```javascript
> mongoose.connect(process.env.MONGODB_URI);
> ```
