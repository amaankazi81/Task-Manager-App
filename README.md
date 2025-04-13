# Task Manager App

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

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/amaankazi81/Task-Manager-App.git
    cd task-manager-app

2. **Set up the backend:**
   ```bash
       cd backend

3. **Install dependencies:**
   ```bash
        npm install

4. **Create .env file**
   ```bash
        echo "PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key" > .env

5. **Start the server:**
   ```bash
       node server.js

6. **Set up the frontend:**
   ```bash
       cd ../frontend

7. **Install dependencies**
    ```bash
        npm install

8. **Start the development server**
    ```bash
          npm start

9. **Generate a JWT secret key:**
    ```bash
        node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

  Copy the output to your .env file as the JWT_SECRET value.
  

## Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Login a user


## Tasks

**GET /api/tasks - Get all tasks for the logged-in user**

![TM-1](https://github.com/user-attachments/assets/7f40050b-51b3-4d4a-a5f3-65f8947d81c6)


**POST /api/tasks - Create a new task**

![TM-2](https://github.com/user-attachments/assets/368b17bd-5e25-4e2f-acb2-2cb987e73257)


**PATCH /api/tasks/:id/complete - Mark a task as completed**

![TM-3](https://github.com/user-attachments/assets/6441e265-d544-41e1-b1af-347136e2c326)


**DELETE /api/tasks/:id - Delete a task**

![Tm-4](https://github.com/user-attachments/assets/eee832bb-b2fa-4521-8698-6f5180111f51)



## Folder Structure

task-manager-app/

backend/ - Node.js/Express backend, Authentication middleware, MongoDB schemas, API routes, Entry point, Environment variables

frontend/ - React frontend, HTML, CSS and App Dashboad UI


## MongoDB Atlas Setup

- Create a MongoDB Atlas account

- Set up a cluster

- Create a database user

- Add your IP to the access list

- Get your connection string

- Add the connection string to your .env file


**License**
This project is licensed under the MIT License.
