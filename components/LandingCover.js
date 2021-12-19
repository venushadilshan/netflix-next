import {BsFillPlayFill,BsPlusLg} from "react-icons/bs"
import Image from "next/image";
import {netflixLogo} from "../assets/nflogo.png"
import cover from "../assets/cover.jpg"
const LandingCover = () => {
    return ( <div className="bg-[url('../assets/cover.jpg')] bg-cover hover:bg-bottom bg-center duration-1000" style={{height:"50rem"}}>

        <div className="flex flex-row h-full items-center justify-between">
            <div className="flex flex-col items-start justify-center ml-20">
        <img src="https://pngpress.com/wp-content/uploads/2020/09/uploads_netflix_netflix_PNG11.png" className="w-32 ml-1 p-0" />
        <h1 className="text-slate-50 text-6xl font-bold">INTERSTELLAR</h1>
        <p className="text-slate-50 w-96 text-md font-semibold ">When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.</p>        <div className="flex flex-row justify-start items-start mt-2">
        <button className="bg-gray-400/50 px-8 py-1 mt-2 rounded text-slate-50 font-semibold flex flex-row items-center text-md mx-2 hover:bg-gray-600"><BsFillPlayFill/> &nbsp;Play</button>
        <button className="bg-gray-400/50 px-8 py-1 mt-2 rounded text-slate-50 font-semibold flex flex-row items-center text-md mx-2 hover:bg-gray-600"><BsPlusLg/> &nbsp;My List</button>
        </div>
            </div>
            <div className="flex flex-col">

</div>
        </div>
    </div> );
}
 
export default LandingCover;