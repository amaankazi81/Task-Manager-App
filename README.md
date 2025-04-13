Task Manager App
A full-stack task management application with user authentication, allowing users to create, view, complete, and delete tasks.

Features

User authentication (register/login)
Task management (create, view, complete, delete)
Responsive design for both desktop and mobile
Secure routes with JWT authentication

Tech Stack
Frontend

React (with Hooks)
React Router for navigation
Context API for state management
Modern CSS with Flexbox

Backend

Node.js with Express.js
Alternative backend option with Python FastAPI
JWT for authentication
MongoDB for data storage

Getting Started
Prerequisites

Node.js (v14 or higher)
MongoDB (local or Atlas)
Git

Installation

Clone the repository:

bashgit clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app

Set up the backend:

bashcd backend

# Install dependencies
npm install

# Create .env file
echo "PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key" > .env

# Start the server
node server.js

Set up the frontend:

bashcd ../frontend

# Install dependencies
npm install

# Start the development server
npm start

Generate a JWT secret key:

bashnode -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
Copy the output to your .env file as the JWT_SECRET value.
API Endpoints
Authentication

POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user

Tasks

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
MongoDB Atlas Setup

Create a MongoDB Atlas account
Set up a cluster
Create a database user
Add your IP to the access list
Get your connection string
Add the connection string to your .env file

Deployment
Backend Deployment
The backend can be deployed to platforms like Heroku, Render, or Railway.
bash# Example for Heroku
heroku create
git push heroku main
Frontend Deployment
The React frontend can be deployed to platforms like Netlify, Vercel, or GitHub Pages.
bash# Build for production
npm run build

# Deploy to Netlify
netlify deploy --prod
Contributing

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.
