import { createBrowserRouter, Navigate } from "react-router-dom";
import  App  from "../App";
import  HomePage  from "../pages/HomePage.jsx";
// import  Products  from "../pages/Products.jsx";
// import  Contact  from "../pages/Contact.jsx";
// import  UserRegistration  from "../pages/UserRegistration.jsx";
// import  SpellCard  from "../pages/";
// import  NotFound from "../pages/NotFound.jsx"

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        // element: <Products />,
      },
      {
        path: "contact",
        // element: <Contact />,
      },
      {
        path: "discount-2024",
        // element: <Navigate to="products" replace/>
      },
      
      {
        path: "users",
        children: [
            {
                index: true,
                // element: <UserList />,
            },
            {
                path: "new",
                // element: <UserRegistration />,
            },
        ]
      },
      {
        path: "*",
        // element: <NotFound />
      }
    ],
  },
]);

export default AppRouter;