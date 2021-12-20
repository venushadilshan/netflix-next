import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
import MovieBG from "../components/MovieBG";

const MovieDetails = () => {
    const router = useRouter()
    return (




        <div className="bg-gray-800 relative" >
               <MovieBG image={router.query.movieCover}/>
            <NavBar />
         
            <div className="flex flex-row items-center h-screen  z-20 flex-wrap lg:flex-nowrap">

                <div className="shadow-2xl z-20 flex relative bg-center bg-cover flex-col justify-center w-full h-72 lg:h-3/4 lg:w-1/2 items-start lg:ml-20 rounded" style={{ backgroundImage: "url('"+router.query.movieCover+"')" }}>
                    <div className="absolute bottom-0 mb-5  ml-5 flex flex-row z-20">
                    <h1 className=" text-slate-50 text-3xl font-bold">{router.query.movieName}</h1>
                    </div>
                    
                </div>
            <div className="flex flex-col items-start justify-start lg:mt-20 mt-2 lg:h-3/4 h-full w-full z-20">
            
            <h1 className=" text-slate-50 text-3xl ml-5 font-bold z-20">{router.query.movieName}</h1>
            <p className="text-slate-50 my-2 pl-5  pr-5 z-20"><span className="font-semibold">Votes: </span>{router.query.movieVotes} </p>
            <p className="text-slate-50 my-2 pl-5  pr-5 z-20"><span className="font-semibold">Release Date:</span> {router.query.movieDate} </p>
            <div className="flex flex-row lg:mt-5">
            <button className="bg-red-700 ml-5 px-5 py-1 rounded text-slate-50 opacity-100 hover:opacity-100">Preview</button>
            <button className="bg-red-700 ml-5 px-5 py-1 rounded text-slate-50 opacity-100 hover:opacity-100">Add to My List</button>
            </div>
              <p className="text-slate-50 lgmt-5  pl-5  pr-5 w-3/4 z-20 ">{router.query.movieDescription}</p>
            </div>

            </div>
        </div>);
}

export default MovieDetails;