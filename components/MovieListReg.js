import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const MovieListReg = (props) => {
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
      params: {with_genres: '80', page: '2'},
      headers: {
        'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
        'x-rapidapi-key': 'e02f53149cmshb8c3e468fb82839p1aa0b2jsncacbf50900a0'
      }
    };
    
    axios.request(options).then(function (response) {
      setMovieList(response.data.results);
    }).catch(function (error) {
      console.error(error);
    });


  }, []);

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);



  return (<div className="container mt-2  ">
    
    <div className="flex flex-row">
      <h1 className="text-slate-50 ml-5 text-2xl font-bold mb-5">{props.sectionName}</h1></div>

    <div className="flex flex-row overflow-x-auto  w-screen flex-shrink-0  swipe ">

    
      {movieList.map((item) => (
      <MovieCard movieName={item.title} movieCover={item.backdrop_path}/>
      ))}
    
  </div>  </div>);
}

export default MovieListReg;