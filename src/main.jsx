import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import SocialMedia from "./components/Icons.jsx";
import  AppRouter  from "./utils/AppRouter.jsx";
import  AppProviderCharacters  from "./utils/AppContextCharacters.jsx";
import AppProviderSpells from "./utils/AppContextSpells.jsx";

// import "./style/index.scss";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviderCharacters>
      <AppProviderSpells>
        <RouterProvider router={AppRouter} />
      </AppProviderSpells>
    </AppProviderCharacters>
  </StrictMode>
);
