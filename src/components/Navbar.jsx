import { FaHouseChimneyUser } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { GrServices } from "react-icons/gr";import { SiBookstack } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { LuLanguages } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-router-dom";
import {useState } from "react";
// import HomePage from "./HomePage";
const Navbar = ()=>{
    const [visibleNavLink,setVisibleNavLink] = useState(false)
    return (
        <div className="w-full sm:w-32 fixed z-40 sm:flex">
                <div className="w-full transition-all duration-300 ease-in sm:w-32 flex sm:flex-col px-3 sm:py-5 sm:h-screen">
                    <div className="logo w-1/6 h-16 my-auto mx-auto flex items-center justify-center bg-amber-400 sm:w-24 sm:h-24 rounded-xl hover:cursor-pointer hover:bg-yellow-300">
                        <h1 className="font-bold ease-in duration-300 hover:scale-110 text-xl">A2S</h1>
                    </div>
                    <div className="icon flex items-center sm:rounded-xl sm:mt-4 w-4/5 h-24  sm:w-24 m-auto sm:h-5/6 ">
                        <div className="bg-amber-500 p-4  rounded-full invisible sm:visible  m-auto flex  sm:flex-col gap-4">
                            <Link to={"/"} className="flex hover:scale-125 transition-all ease-in duration-100 invisible sm:visible justify-center">
                                <div className="text-white group relative text-2xl">
                                    <FaHouseChimneyUser />
                                    <div className="absolute -top-1 -right-10">
                                        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400">HOME</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/projects"} className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <div className="text-white group relative text-2xl">
                                    <GrProjects />
                                    <div className="absolute  -top-1 -right-16">
                                        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400">PROJECTS</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/services"} className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <div className="text-white group relative text-2xl">
                                    <GrServices />
                                    <div className="absolute  -top-1 -right-14">
                                        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400">SERVICES</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/languages"} className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <div className="text-white group relative text-2xl">
                                    <LuLanguages />
                                    <div className="absolute  -top-1 -right-20">
                                        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400">LANGUAGES</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/skills"} className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <div className="text-white group relative text-2xl">
                                    <GiSkills />
                                    <div className="absolute  -top-1 -right-10">
                                        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400">SKILLS</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/education"} className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <div className="text-white group relative text-2xl">
                                    <MdCastForEducation />
                                    <div className="absolute  -top-1 -right-20">
                                        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400">EDUCATION</p>
                                    </div>
                                </div>
                            </Link>
                            <Link className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <div className="text-white group relative text-2xl">
                                    <FaFileDownload />
                                    <div className="absolute  -top-1 -right-24">
                                        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400">DOWNLOAD CV</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                   {visibleNavLink?(
                    <div className="flex sm:hidden justify-center items-center">
                        <button onClick={()=>{setVisibleNavLink(false)}} className={`text-3xl text-white transition-all ease-in duration-300 ${visibleNavLink?("scale-100"):("scale-0")}`}><RxCross2 /></button>
                    </div>
                   ):(
                     <div className="flex sm:hidden justify-center items-center">
                        <button onClick={() => setVisibleNavLink(true)} className={`text-3xl text-white transition-all ease-in duration-300 ${visibleNavLink?("scale-0"):("scale-100")}`}><HiMiniBars3BottomLeft /></button>
                    </div>
                   )}
                </div>
                <div className={`w-screen backdrop-blur h-screen transition-all ease-in duration-300  sm:invisible flex items-center justify-center absolute ${visibleNavLink?("visible"):("invisible")}`}>
                    <div className={`flex ${visibleNavLink?("scale-100"):("scale-0")} transition-all ease-in duration-300 text-center text-xl font-bold flex-col gap-4`}>
                        <div>
                        <Link to={"/"}><span className="text-white hover:text-amber-500 transition-all ease-in duration-100">HOME</span></Link>
                        </div>
                        <div>
                        <Link to={"/projects"}><span className="text-white hover:text-amber-500 transition-all ease-in duration-100">PROJECTS</span></Link>
                        </div>
                        <div>
                        <Link to={"/services"}><span className="text-white hover:text-amber-500 transition-all ease-in duration-100">SERVICES</span></Link>
                        </div>
                        <div>
                        <Link to={"/languages"}><span className="text-white hover:text-amber-500 transition-all ease-in duration-100">LANGUAGES</span></Link>
                        </div>
                        <div>
                        <Link to={"/skills"}><span className="text-white hover:text-amber-500 transition-all ease-in duration-100">SKILLS</span></Link>
                        </div>
                        <div>
                        <Link to={"/education"}><span className="text-white hover:text-amber-500 transition-all ease-in duration-100">EDUCATION</span></Link>
                        </div>
                        <div>
                        <Link><span className="text-white hover:text-amber-500 transition-all ease-in duration-100">DOWNLOAD CV</span></Link>
                        </div>
                    </div>
                </div>
               <div>
               </div>
            </div>
    )
}


export default Navbar;