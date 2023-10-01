import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/index.css';

//Rounter
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../routes/Home';
import Cadastro from '../routes/Cadastro';
import Login from '../routes/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
  },
  {
    path: "login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
