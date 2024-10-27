import { createBrowserRouter, Navigate } from "react-router-dom";
import  App  from "../App";
import  HomePage  from "../pages/HomePage.jsx";
// import  AllCharacters  from "../pages/AllCharacters.jsx";
// import  Books  from "../pages/Books.jsx";
// import  Movies  from "../pages/Movies.jsx";
// import  Spells  from "../pages/Spells.jsx";
// import  Games from "../pages/Games.jsx"

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