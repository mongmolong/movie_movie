import { createBrowserRouter } from "react-router-dom";
import MovieList from "./components/MovieList";
import TvList from "./components/TvList";
import MovieDetail from "./components/MovieDetail";



const router = createBrowserRouter([
    { path: '/', element: <MovieList /> },
    { path: '/tv', element: <TvList /> },
    { path: '/:id', element: <MovieDetail /> },

    

    // {
    //     path: "/",
    //     element: <MovieList />
    // },
    // {
    //     path: "/movies/:id", // 영화 상세 페이지
    //     element: <MovieDetail />
    // },
    // {
    //     path: "/tv",
    //     element: <TvList />
    // },
    // {
    //     path: "/tv/:id", // TV 프로그램 상세 페이지
    //     element: <TvDetails />
    // },
]);
export default router;