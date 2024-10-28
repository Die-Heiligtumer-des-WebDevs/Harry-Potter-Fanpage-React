import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
<<<<<<< HEAD
// import HomePage from "../pages/HomePage.jsx";

// import Books from "../pages/Books.jsx";
// import SingleBookCard from "../components/SingleBookCard.jsx";
=======
import HomePage from "../pages/HomePage.jsx";

import Books from "../pages/Books.jsx";
import SingleBookCard from "../components/SingleBookCard.jsx";
>>>>>>> main
// import  Movies  from "../pages/Movies.jsx";
// import  SingleMovieCard  from "../components/SingleMovieCard.jsx";
// import AllCharacters from "../pages/AllCharacters.jsx"

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
<<<<<<< HEAD
        // element: <HomePage />,
=======
        element: <HomePage />,
>>>>>>> main
      },

      {
        path: "characters",
        // element: <AllCharacters />,
      },
      {
        path: "books",
<<<<<<< HEAD
        // element: <Books />,
      },
      {
        path: "single-book/:id",
        // element: <SingleBookCard />,
=======
        element: <Books />,
      },
      {
        path: "single-book/:id",
        element: <SingleBookCard />,
>>>>>>> main
      },
      {
        path: "movies",
        // element: <Movies />,
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
