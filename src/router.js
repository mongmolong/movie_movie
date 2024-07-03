import { createBrowserRouter } from "react-router-dom";
import MovieList from "./components/MovieList";
import TvList from "./components/TvList";
import MovieDetail from "./components/MovieDetail";
import TvDetails from "./components/TvDetails";
import NabTabs from "./components/NavTabs";



const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <>
                    <NabTabs />,
                    <MovieList />
                </>
            )
        },
        {
            path: "/:id", //params를 통해 접근가능
            element: (
                <>
                    <NabTabs />,
                    <MovieDetail />
                </>
            )
        },
        {
            path: "/tv",
            element: (
                <>
                    <NabTabs />,
                    <TvList />
                </>)
        },
        {
            path: "/:id", //params를 통해 접근가능
            element: (
                <>
                    <NabTabs />,
                    <TvDetails />
                </>
            )
        }],
    {
        basename: process.env.PUBLIC_URL
    }

);

export default router;