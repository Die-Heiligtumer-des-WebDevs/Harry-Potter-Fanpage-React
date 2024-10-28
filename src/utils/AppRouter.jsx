import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage.jsx";
import Books from "../pages/Books.jsx";
import SingleBookCard from "../components/SingleBookCard.jsx";
import  Movies  from "../pages/Movies.jsx";
// import  SingleMovieCard  from "../components/SingleMovieCard.jsx";
import AllCharacters from "../pages/AllCharacters.jsx"

// import  Spells  from "../pages/UserRegistration.jsx";
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
        path: "characters",
        element: <AllCharacters />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "single-book/:id",
        element: <SingleBookCard />,
      },
      {
        path: "movies",
        element: <Movies />,
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
        ],
      },
      {
        path: "*",
        // element: <NotFound />
      },
    ],
  },
]);

export default AppRouter;
