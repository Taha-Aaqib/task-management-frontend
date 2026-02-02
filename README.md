# Task Management Frontend

A simple React + Vite + Tailwind CSS frontend for a task management system, supporting authentication, CRUD operations, and file attachments.

## Features

- User registration and login (JWT-based)
- Add, view, complete, and delete tasks
- Upload, download, and delete file attachments for each task
- Responsive, clean UI with Tailwind CSS
- Axios for API requests
- React Router for navigation

## Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   └── Tasks/
│   │       ├── AttachmentsList.jsx
│   │       ├── FileUpload.jsx
│   │       └── TaskForm.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── TasksPage.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── fileService.js
│   │   └── taskService.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- Backend API running (see below)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Taha-Aaqib/task-management-frontend.git
   cd task-management-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend API

- The frontend expects the backend API to be running at `http://localhost:3000`.
- Endpoints used:
  - `POST /auth/register` — Register a new user
  - `POST /auth/login` — Login and receive JWT
  - `GET /tasks` — Get all tasks for the user
  - `POST /tasks` — Create a new task
  - `PUT /tasks/:id` — Update a task (e.g., mark complete)
  - `DELETE /tasks/:id` — Delete a task
  - `POST /tasks/:id/upload` — Upload a file to a task
  - `GET /tasks/:id/download/:fileIndex` — Download a file
  - `DELETE /tasks/:id/file/:fileIndex` — Delete a file

### Environment Variables

No environment variables are required for the frontend. The API URL is hardcoded as `http://localhost:3000` in `src/services/api.js`. Change it if your backend runs elsewhere.

## Customization

- To change the API URL, edit `src/services/api.js`.
- To adjust styling, edit `index.css` or Tailwind classes in components.

## Deployment

You can build the app for production with:

```bash
npm run build
```

The output will be in the `dist/` folder. Deploy it to any static hosting (Vercel, Netlify, GitHub Pages, etc).

## License

MIT

---

**Made with React, Vite, and Tailwind CSS.**
