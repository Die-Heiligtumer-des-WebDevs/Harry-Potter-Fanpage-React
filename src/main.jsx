import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, useNavigate } from "react-router-dom";
import AppRouter from "./utils/AppRouter.jsx";
import AppProvider from "./utils/AppContext.jsx";

import Books from "./pages/Books.jsx";
// import "./style/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
 
      {/* <Books /> */}
      <RouterProvider router={AppRouter} />
    </AppProvider>
  </StrictMode>
);
