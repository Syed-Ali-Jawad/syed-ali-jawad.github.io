import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";

const router = createBrowserRouter([
  { path: "", element: <HomePage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "*", element: <HomePage /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
