## Task Manager App

A full-stack Task management application with user authentication, allowing users to create, view, complete, and delete tasks.

## Features

- **User authentication**: (register/login)
- **Task management**: (create, view, complete, delete)
- **Responsive design**: for both desktop and mobile
- Secure routes with **JWT authentication**

## Tech Stack

- **Frontend**: React (with Hooks), React Router for navigation, Context API for state management, Modern CSS with Flexbox
- **Backend**: Node.js with Express.js, JWT for authentication, MongoDB for database

# Getting Started
**Prerequisites**

Node.js (v14 or higher)
MongoDB (local or Atlas)
Git

##Installation

**Clone the repository:**

  ```bash
  git clone https://github.com/amaankazi81/Task-Manager-App.git
  cd task-manager-app

**Set up the backend:**

  ```bash
  cd backend

**Install dependencies:**

  ```bash
  npm install

**Create .env file**
echo "PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key" > .env

**Start the server:**

  ```bash
  node server.js

**Set up the frontend:**

  ```bash
  cd ../frontend

#Install dependencies
npm install

#Start the development server
npm start

#Generate a JWT secret key:

  ```bash
  node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

  Copy the output to your .env file as the JWT_SECRET value.
  API Endpoints

**Authentication**

POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user

**Tasks**

GET /api/tasks - Get all tasks for the logged-in user
POST /api/tasks - Create a new task
PATCH /api/tasks/:id/complete - Mark a task as completed
DELETE /api/tasks/:id - Delete a task

Folder Structure
task-manager-app/
├── backend/                # Node.js/Express backend
│   ├── middleware/         # Authentication middleware
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── server.js           # Entry point
│   └── .env                # Environment variables
│
├── frontend/               # React frontend
│   ├── public/             # Static files
│   ├── src/                
│   │   ├── components/     # React components
│   │   ├── context/        # Context API providers
│   │   ├── App.js          # Main component
│   │   ├── App.css         # Styles
│   │   └── index.js        # Entry point
│   └── package.json        # Dependencies
│
└── README.md               # Project documentation


# MongoDB Atlas Setup

Create a MongoDB Atlas account
Set up a cluster
Create a database user
Add your IP to the access list
Get your connection string
Add the connection string to your .env file


Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.
