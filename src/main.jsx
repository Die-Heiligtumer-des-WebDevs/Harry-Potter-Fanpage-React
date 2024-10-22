import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./utils/AppRouter.jsx";
import { AppProvider } from "./utils/AppContextCharacters.jsx";
import SocialMedia from "./components/Icons.jsx";
// import "./style/index.scss";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={AppRouter} />
      <SocialMedia />
    </AppProvider>
  </StrictMode>
);
