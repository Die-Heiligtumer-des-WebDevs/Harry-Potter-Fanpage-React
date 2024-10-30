import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";

import HomePage from "../pages/HomePage.jsx";
import CharactersPage from "../pages/CharactersPage.jsx";
import SingleCharacterPage from "../pages/SingleCharacterPage.jsx";
import BooksPage from "../pages/BooksPage.jsx";
import SingleBookPage from "../pages/SingleBookPage.jsx";
import MoviesPage from "../pages/MoviesPage.jsx";
import SingleMoviePage from "../pages/SingleMoviePage.jsx";
import SpellsPage from "../pages/SpellsPage.jsx";
import HogwartsQuiz from "../pages/HogwartsQuiz.jsx";
import Games from "../pages/Games.jsx"
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
        children: [
          {
            path: "",
            element: <CharactersPage />,
          },
          {
            path: ":id",
            element: <SingleCharacterPage />,
          },
        ],
      },
      {
        path: "books",
        children: [
          {
            path: "",
            element: <BooksPage />,
          },
          {
            path: ":id",
            element: <SingleBookPage />,
          },
        ],
      },

      {
        path: "movies",
        children: [
          {
            path: "",
            element: <MoviesPage />,
          },
          {
            path: ":id",
            element: <SingleMoviePage />,
          },
        ],
      },
      {
        path: "spells",
        element: <SpellsPage />,
      },
      {
        path: "games",
        children: [
          { path: "",
            element: <Games />,
          },
          {
            path: ":hogwarts-quiz",
            element: <HogwartsQuiz />
          }
        ]
        
      },
      {
        // path: "*",
        // element: <NotFound />
      },
    ],
  },
]);

export default AppRouter;
