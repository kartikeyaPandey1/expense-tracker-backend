# Personal Expense Tracker Backend API

A secure backend-only Expense Tracker API built using Node.js, Express.js, and MongoDB.

## Features

- User Authentication (JWT)
- Register/Login APIs
- Protected Routes
- Expense CRUD Operations
- Expense Filtering
- MongoDB Integration
- Password Hashing with bcrypt
- Modular Backend Architecture
- RESTful APIs
- Postman API Testing

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- Postman

---

## Project Structure

```bash
src/
│
├── controllers/
├── routes/
├── models/
├── middleware/
├── utils/
├── config/
└── validators/
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker-backend.git
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=your_secret

JWT_EXPIRE=7d
```

### Run Server

```bash
npm run dev
```

---

## API Endpoints

### Authentication

```http
POST /auth/register
POST /auth/login
GET /auth/me
```

### Expenses

```http
POST /expenses
GET /expenses
GET /expenses/:id
PUT /expenses/:id
DELETE /expenses/:id
```

---

## Authentication Flow

- User registers/logs in
- JWT token generated
- Token sent in Authorization header
- Middleware verifies token
- Protected routes accessible

---

## Learning Outcomes

- Backend Architecture
- REST API Development
- JWT Authentication
- MongoDB Integration
- Middleware Implementation
- Secure Password Hashing
- CRUD Operations
- Query Filtering

---

## Future Improvements

- Budget Management
- Analytics Dashboard
- CSV/PDF Reports
- Recurring Transactions
- Email Notifications
- Swagger Documentation

---

## Author

Kartikeya Pandey
