import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";

import HomePage from "../pages/HomePage.jsx";
import Books from "../pages/Books.jsx";
import SingleBookCard from "../components/SingleBookCard.jsx";
import Movies  from "../pages/Movies.jsx";
import SingleMovieCard  from "../components/SingleMovieCard.jsx";
import AllCharacters from "../pages/AllCharacters.jsx"
import SpellsPage  from "../pages/SpellsPage.jsx";
import HogwartsQuiz from "../pages/HogwartsQuiz.jsx"
// import NotFound from "../pages/NotFound.jsx"

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
        children: [
          {
            path: "",
            element: <Books />
          },
          {
            path: ":id",
            element: <SingleBookCard />
          }
        ]
      },
      
      {
        path: "movies",
        children: [
          {
            path: "",
            element: <Movies />
          },
          {
            path:":id",
            element: <SingleMovieCard />
          }
        ]
      },
      {
        path: "spells",
        element: <SpellsPage />,
      },
      {
        path: "hogwarts-quiz",
        element: <HogwartsQuiz />
      },
      {
        // path: "*",
        // element: <NotFound />
      },
    ],
  },
]);

export default AppRouter;