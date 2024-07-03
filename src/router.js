import { createBrowserRouter } from "react-router-dom";
import MovieList from "./components/MovieList";
import TvList from "./components/TvList";
import MovieDetail from "./components/MovieDetail";
import TvDetails from "./components/TvDetails";



const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MovieList />
        },
        {
            path: "/:id", //params를 통해 접근가능
            element: <MovieDetail />
        },
        {
            path: "/tv",
            element: <TvList />
        },
        {
            path: "/:id", //params를 통해 접근가능
            element: <TvDetails />
        }],
    {
        basename: process.env.PUBLIC_URL
    }

);

export default router;