📝 Task Manager Frontend

This is the frontend application for the Task Manager API, built using Vue 3, TypeScript, and Vite. It allows users to view, create, update tasks by interacting with the NestJS-powered backend API.

🚀 Tech Stack

Vue 3
Vite
TypeScript
TailwindCSS – for utility-first styling
Vue Router – for client-side routing
Axios – for making HTTP requests
Vue Toastification – for showing elegant toast notifications

🔧 Getting Started

Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repository and install dependencies:


git clone https://github.com/your-username/task-manager-frontend.git
cd task-manager-frontend
npm install

Running the App
Start the development server:
npm run dev

The app will be running at: http://localhost:5173

🌐 API Integration

This frontend connects to the Task Manager API, built with NestJS.

Make sure the backend API is running locally at http://localhost:3000 (or update the base URL in the Axios instance accordingly).

📁 Project Structure
```
src/
├── components/         # Reusable UI components
├── views/              # Route-level components
├── router/             # Vue Router setup
├── types/              # TypeScript interfaces (e.g., Task)
├── utils/              # Axios config, helper functions
└── App.vue             # Root component
```

🤝 Contribution & License

This project is free to use and modify. Contributions are welcome!

Let me know if you'd like a version with badges (build, license, etc.) or if you're planning to deploy and want a section on that too!






