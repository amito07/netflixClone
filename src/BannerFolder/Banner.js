import React, { useEffect, useState } from "react"
import "./Banner.css"
import axios from "../axios"
import requests from "../requests"

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies);
            console.log(request.data.results);
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]
            );
            return request;
        }

        fetchData();

    },[requests.fetchActionMovies])

    function truncate(string,n) {
        return string?.length >n? string.substr(0,n-1) + '....': string;    
    }
    return(
        <header className="banner" style={{
            // https  to original this need to fetch image from netflix
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="banner_content">
                <h1 className="banner_title">{movie?.original_title || movie?.title || movie?.name }</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                <h1 className="banner_discription">{truncate(movie?.overview,150)}</h1>
                </div>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )

}

export default Banner
