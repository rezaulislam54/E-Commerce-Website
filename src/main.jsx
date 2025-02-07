import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from './routes/BasicRoutes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthContextProvider from "./authProvider/AuthContextProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </HelmetProvider>
    </AuthContextProvider>
  </StrictMode>
);
