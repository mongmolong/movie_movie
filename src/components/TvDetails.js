import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../css/details.css";


const TvDetails = () => {
    const params2 = useParams()

    const navigation = useNavigate()
    const [tv, setTv] = useState({});

    const getTvById = async () => {
        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjViYjhmMmJkZGZiOGU5ZDNhZTYyMmRjNmMwOWMyNCIsInN1YiI6IjY2M2ViZmNiMDFiMTVlODQ5OWQ1NzE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0j_XqpTdId7MD9hXgt7UBGMvZmNBtkjHkgBwyhsG_ug"
                }
            }
            const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${params2.id}?language=en-US&page=1`,
                config)
            setTv(data)
        }
        catch (err) {
            console.log("+++++++++++++", err.message)
        }
    }
    useEffect(() => {
        getTvById();
    }, [])

    if (!tv) {
        return <div>Loading...</div>;
    }

    return ( 
        <div className="detailContainer">
            <img className="detailImg" src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.title} />
            <div className="detailAbout">
                <h1>Title : {tv.title}</h1>
                <p>{tv.overview}</p>
                <button className="detailBtn" onClick={() => navigation(-1)}>뒤로가기</button>
            </div>
        </div>

    );
};

export default TvDetails;