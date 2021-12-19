import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useState, useEffect } from "react";
const MovieCard = (props) => {
   
    
    console.log(props.movieCover)
    const [img, setImg] = useState("")
const check=()=>{
    if (props.movieCover == undefined || props.movieCover == "" || props.movieCover ==null) {
        setImg("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180")
    }
    else {
        setImg(props.movieCover)
    }
}

useEffect(() => {
    check()
  }, []);
    return (


        <div className={" flex flex-col m-5 rounded  flex-shrink-0 h- bg-gray-50 relative   bg-cover hover:bg-bottom bg-start  duration-1000 w-96 hover:scale-125 rounded"}  >
            <img src={img} style={{width:"100%"}} />
            <div className="absolute bottom-0 items-center text-center justify-center" style={{ width: "95%" }} >
                <h1 className="text-slate-50  text-lg ml-2 font-bold "> {props.movieName}</h1>
                <button className="bg-red-500 ml-2 mb-2 py-1 rounded px-5 text-slate-50  self-center w-full">Play</button>
            </div>
        </div>

    );
}

export default MovieCard;