import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, useNavigate } from "react-router-dom";
import  AppRouter  from "./utils/AppRouter.jsx";
import  AppProviderCharacters  from "./utils/AppContextCharacters.jsx";
import AppProviderSpells from "./utils/AppContextSpells.jsx";
import HogwartsQuiz from "./pages/zauberschule.jsx";

// import "./style/index.scss";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviderCharacters>
     
      <AppProviderSpells>
      <HogwartsQuiz/>
        <RouterProvider router={AppRouter} />
      </AppProviderSpells>
    </AppProviderCharacters>
  </StrictMode>
);
