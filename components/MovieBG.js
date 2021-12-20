import { useRouter } from "next/router";

const MovieBG = () => {
    const router = useRouter();
    return (<div className="h-full opacity-30 fixed w-full shadow-2xl"  style={{backgroundImage: "url('"+router.query.movieCover+"')"}}>

    </div>);
}
 
export default MovieBG;