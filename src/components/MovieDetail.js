import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../css/details.css";

const MovieDetail = () => {
    const params = useParams()

    const navigation = useNavigate()
    const [movie, setMovie] = useState({}); //어떤 형태로 담을 건지!!

    const getMovieById = async () => {
        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjViYjhmMmJkZGZiOGU5ZDNhZTYyMmRjNmMwOWMyNCIsInN1YiI6IjY2M2ViZmNiMDFiMTVlODQ5OWQ1NzE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j_XqpTdId7MD9hXgt7UBGMvZmNBtkjHkgBwyhsG_ug"
                }
            }
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, config)
            setMovie(data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getMovieById();
    }, [])

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detailContainer">
            <img className="detailImg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="detailAbout">
                <h1>Title : {movie.title}</h1>
                <p>{movie.overview}</p>
                <button className="detailBtn" onClick={() => navigation(-1)}>뒤로가기</button>
            </div>
        </div>
    );
};

export default MovieDetail;