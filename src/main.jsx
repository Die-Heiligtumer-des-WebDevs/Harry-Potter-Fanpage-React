import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, useNavigate } from "react-router-dom";
import AppRouter from "./utils/AppRouter.jsx";
import AppProvider from "./utils/AppContext.jsx";

import Movies from "./pages/Movies.jsx";
import Books from "./pages/Books.jsx";
import AllCharacter from "./pages/AllCharacters.jsx";
// import "./style/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
 
      <AllCharacter />
      <RouterProvider router={AppRouter} />
    </AppProvider>
  </StrictMode>
);
