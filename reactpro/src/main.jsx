import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import UserPage from './pages/user';
import './styles/global.css';
import TodoApp from './components/todo/TodoApp';
import ErrorPage from './pages/error';
import BookPage from './pages/book';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index : true,
        element: <TodoApp/>
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/books",
        element: <BookPage/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
