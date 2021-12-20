
import { FaSearch, FaBell, FaUserAlt } from "react-icons/fa";
import {SiNetflix} from "react-icons/si"
const NavBar = () => {
    return (
        <nav className="z-20"> 
            <div className="flex flex-row items-center justify-between w-full px-5 fixed">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-center p-1">
                    <p className="text-red-600 text-3xl  font-semibold hover:text-slate-300 my-3 mx-0 "><SiNetflix/></p>
                        <p className="text-slate-50 text-sm font-semibold hover:text-slate-300 m-3 ">Home</p>
                        <p className="text-slate-50 text-sm font-semibold hover:text-slate-300 m-3 ">TV Shows</p>
                        <p className="text-slate-50 text-sm font-semibold hover:text-slate-300 m-3 ">Movies</p>
                        <p className="text-slate-50 text-sm font-semibold hover:text-slate-300 m-3 ">Recently Added</p>
                        <p className="text-slate-50 text-sm font-semibold hover:text-slate-300 m-3 ">My List</p>

                    </div>
                </div>
                <div className="flex flex-col center-items">

                    <div className="flex flex-row ">
                                            
                        <p className="text-slate-50 text-lg font-semibold hover:text-slate-300 m-2 "><FaSearch /></p>
                        <p className="text-slate-50 text-lg font-semibold hover:text-slate-300 m-2 "><FaBell /></p>
                        <p className="text-slate-50 text-lg font-semibold hover:text-slate-300 m-2 "><FaUserAlt /></p>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;