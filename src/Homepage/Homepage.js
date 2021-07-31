import React from "react"
import "./Homepage.css"
import Nav from "../Nav/Nav"
import Banner from "../BannerFolder/Banner"
import requests from "../requests"
import Row from "../RowFolder/Row"

function HomeScreen(){
    return(
        <div className="homescreen">
            <Nav/>
            <Banner/>
            <Row
            title="NETFLIX ORIGINALS"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow 
            />
            <Row
            title="Top Rated"
            fetchUrl = {requests.fetchTopRated}
            isLargeRow 
            />
            <Row
            title="Action Movies"
            fetchUrl = {requests.fetchActionMovies}
            isLargeRow 
            />
            <Row
            title="Comedy Movies"
            fetchUrl = {requests.fetchComedyMovies}
            isLargeRow 
            />
            <Row
            title="Horror Movies"
            fetchUrl = {requests.fetchHorrorMovies}
            isLargeRow 
            />
            <Row
            title="Romance Movies"
            fetchUrl = {requests.fetchRomanceMovies}
            isLargeRow 
            />
            <Row
            title="Documentaries"
            fetchUrl = {requests.fetchDocumentaries}
            isLargeRow 
            />
        </div>
    )
}

export default HomeScreen