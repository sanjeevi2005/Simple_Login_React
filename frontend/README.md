# Simple Login React 🔐

A simple full-stack login authentication application built with **React.js** and **Node.js + Express.js**.

This project demonstrates how a React frontend communicates with an Express backend using **Axios**, validates login credentials, and navigates users to different pages based on the authentication result.

## 🚀 Features

- 🔐 Username and password login
- ⚛️ React.js frontend
- 🟢 Node.js + Express.js backend
- 📡 Axios API communication
- 🧭 React Router navigation
- ✅ Login success page
- ❌ Login failure page
- 🌐 CORS enabled
- 🎨 Tailwind CSS styling

## 🛠️ Technologies

**Frontend**
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- CORS

## 📁 Project Structure

```text
Simple_Login_React/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── Fail.jsx
│   │   ├── Success.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## 🔄 How It Works

```text
Enter Username & Password
          ↓
     React Frontend
          ↓
      Axios POST
          ↓
     Express Backend
          ↓
   Check Credentials
       ↙       ↘
   Correct    Incorrect
      ↓           ↓
 /success       /fail
```

The frontend sends the login details to the backend:

```javascript
axios.post("http://localhost:5000/login", {
    username: user,
    password: pass,
});
```

The Express server validates the credentials:

```javascript
if (req.body.username === user && req.body.password === pass) {
    res.send(true);
} else {
    res.send(false);
}
```

Based on the response:

- `true` → Navigate to `/success`
- `false` → Navigate to `/fail`

## 🔑 Demo Login

```text
Username: sanjeevi
Password: 123456
```

> These credentials are hardcoded for demonstration and learning purposes only.

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/sanjeevi2005/Simple_Login_React.git
cd Simple_Login_React
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

## ▶️ Run the Project

### Start Backend

From the `backend` folder:

```bash
node index.js
```

Backend runs on:

```text
http://localhost:5000
```

### Start Frontend

From the `frontend` folder:

```bash
npm run dev
```

Frontend runs on the Vite development server, usually:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

## 🧭 Routes

| Route | Description |
|---|---|
| `/` | Login page |
| `/success` | Login successful |
| `/fail` | Login failed |

## 📡 API

### `POST /login`

Validates the username and password.

**Request:**

```json
{
    "username": "sanjeevi",
    "password": "123456"
}
```

**Successful response:**

```text
true
```

**Failed response:**

```text
false
```

## 🧠 Concepts Learned

### React

- `useState()`
- `useNavigate()`
- `useLocation()`
- Controlled components
- Event handling
- Component-based architecture

### React Router

- `BrowserRouter`
- `Routes`
- `Route`
- `useNavigate()`
- `useLocation()`
- Passing data using navigation state

### Express.js

- Creating an Express server
- POST API routes
- `express.json()`
- `express.urlencoded()`
- CORS
- Request and response handling

### Axios

- Sending POST requests
- Sending JSON data
- Receiving API responses
- Connecting React with Express

## 🔒 Security Note

This project is intended for learning purposes.

The username and password are currently stored directly in the backend:

```javascript
const user = "sanjeevi";
const pass = "123456";
```

A production authentication system should use:

- Database storage
- Password hashing such as bcrypt
- JWT or session-based authentication
- Environment variables
- Input validation
- Proper error handling
- HTTPS

## 🔮 Future Improvements

- [ ] Add database authentication
- [ ] Add user registration
- [ ] Add password hashing with bcrypt
- [ ] Add JWT authentication
- [ ] Add logout functionality
- [ ] Add form validation
- [ ] Add loading and error states
- [ ] Use environment variables
- [ ] Deploy frontend and backend

## 👨‍💻 Author

**Sanjeevi S**

B.E. Computer Science and Engineering

Interested in **MERN Stack, Full-Stack Web Development, and Mobile Application Development**.

---

⭐ If you found this project useful, consider giving the repository a star!