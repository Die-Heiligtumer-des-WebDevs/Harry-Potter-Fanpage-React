import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";

import HomePage from "../pages/HomePage.jsx";
import CharactersPage from "../pages/CharactersPage.jsx"
import BooksPage from "../pages/BooksPage.jsx";
import SingleBookCard from "../components/SingleBookCard.jsx";
import MoviesPage  from "../pages/MoviesPage.jsx";
import SingleMovieCard  from "../components/SingleMovieCard.jsx";
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
        element: <CharactersPage />,
      },
      {
        path: "books",
        children: [
          {
            path: "",
            element: <BooksPage />
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
            element: <MoviesPage />
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