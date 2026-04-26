import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { GrProjects, GrServices } from "react-icons/gr";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoIosContact } from "react-icons/io";
import { LuLanguages } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
// import HomePage from "./HomePage";
const Navbar = ()=>{
    const [visibleNavLink,setVisibleNavLink] = useState(false)
    const location = useLocation()
    // style={{backdropFilter:'blur(2px)'}}
    return (
        <div className="fixed z-40 w-full backdrop-blur-sm sm:backdrop-blur-none sm:w-32">
                <div className="flex w-full px-3 transition-all duration-300 ease-in sm:w-32 sm:flex-col sm:py-5 sm:h-screen">
                    <Link style={{background: "#DB9F75"}} to={"/"} className="flex items-center justify-center w-1/6 h-16 mx-auto my-auto logo sm:w-24 sm:h-24 rounded-xl hover:cursor-pointer hover:bg-yellow-300">
                        <h1 className="text-xl font-bold duration-300 ease-in hover:scale-110">A2S</h1>
                    </Link>
                    <div className="flex items-center w-4/5 h-24 m-auto icon sm:rounded-xl sm:mt-4 sm:w-24 sm:h-5/6 ">
                        <div style={{background: "#DB9F75"}} className="flex invisible gap-4 p-4 m-auto rounded-full sm:visible sm:flex-col">
                            <Link to={"/"} className={`flex ${location.pathname=="/"?("scale-125"):("")} hover:scale-125 transition-all ease-in duration-100 invisible sm:visible justify-center`}>
                                <div className="relative text-2xl text-white group">
                                    <FaHouseChimneyUser />
                                    <div className="absolute -top-1 -right-10">
                                        <p className={`text-xs opacity-0 ${location.pathname=="/"?("opacity-100"):("")} group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400`}>HOME</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/projects"} className={`flex ${location.pathname=="/projects"?("scale-125"):("")} hover:scale-125 transition-all ease-in duration-100 invisible sm:visible justify-center`}>
                                <div className="relative text-2xl text-white group">
                                    <GrProjects />
                                    <div className="absolute -top-1 -right-16">
                                        <p className={`text-xs opacity-0 ${location.pathname=="/projects"?("opacity-100"):("")} group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400`}>PROJECTS</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/services"} className={`flex ${location.pathname=="/services"?("scale-125"):("")} hover:scale-125 transition-all ease-in duration-100 invisible sm:visible justify-center`}>
                                <div className="relative text-2xl text-white group">
                                    <GrServices />
                                    <div className="absolute -top-1 -right-14">
                                        <p className={`text-xs opacity-0 ${location.pathname=="/services"?("opacity-100"):("")} group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400`}>SERVICES</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/languages"} className={`flex ${location.pathname=="/languages"?("scale-125"):("")} hover:scale-125 transition-all ease-in duration-100 invisible sm:visible justify-center`}>
                                <div className="relative text-2xl text-white group">
                                    <LuLanguages />
                                    <div className="absolute -top-1 -right-20">
                                        <p className={`text-xs opacity-0 ${location.pathname=="/languages"?("opacity-100"):("")} group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400`}>LANGUAGES</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/skills"} className={`flex ${location.pathname=="/skills"?("scale-125"):("")} hover:scale-125 transition-all ease-in duration-100 invisible sm:visible justify-center`}>
                                <div className="relative text-2xl text-white group">
                                    <GiSkills />
                                    <div className="absolute -top-1 -right-10">
                                        <p className={`text-xs opacity-0 ${location.pathname=="/skills"?("opacity-100"):("")} group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400`}>SKILLS</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/education"} className={`flex ${location.pathname=="/education"?("scale-125"):("")} hover:scale-125 transition-all ease-in duration-100 invisible sm:visible justify-center`}>
                                <div className="relative text-2xl text-white group">
                                    <MdCastForEducation />
                                    <div className="absolute -top-1 -right-20">
                                        <p className={`text-xs opacity-0 ${location.pathname=="/ecducation"?("opacity-100"):("")} group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400`}>EDUCATION</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/contact"} className={`flex ${location.pathname=="/contact"?("scale-125"):("")} hover:scale-125 transition-all ease-in duration-100 invisible sm:visible justify-center`}>
                                <div className="relative text-2xl text-white group">
                                    <IoIosContact  />
                                    <div className="absolute -top-1 -right-14">
                                        <p className={`text-xs opacity-0 ${location.pathname=="/contact"?("opacity-100"):("")} group-hover:opacity-100 transition-all ease-in duration-200 font-bold text-blue-400`}>CONTACT</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"https://drive.google.com/uc?export=download&id=1Udv05cbu2-8yNAlnqQb3p39JJzbgs3FT"} className="flex justify-center invisible transition-all duration-200 ease-in hover:scale-125 sm:visible">
                                <div className="relative text-2xl text-white group">
                                    <FaFileDownload />
                                    <div className="absolute flex items-center justify-center gap-2 -top-1 -right-32">
                                        <p className="inline text-xs font-bold text-blue-400 transition-all duration-200 ease-in opacity-0 group-hover:opacity-100">DOWNLOAD </p>
                                        <p className="inline text-xs font-bold text-blue-400 transition-all duration-200 ease-in opacity-0 group-hover:opacity-100">RESIUME</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                   {visibleNavLink?(
                    <div className="flex items-center justify-center sm:hidden">
                        <button onClick={()=>{setVisibleNavLink(false)}} className={`text-3xl text-white transition-all ease-in duration-300 ${visibleNavLink?("scale-100"):("scale-0")}`}><RxCross2 /></button>
                    </div>
                   ):(
                     <div className="flex items-center justify-center sm:hidden">
                        <button onClick={() => setVisibleNavLink(true)} className={`text-3xl text-white transition-all ease-in duration-300 ${visibleNavLink?("scale-0"):("scale-100")}`}><HiMiniBars3BottomLeft /></button>
                    </div>
                   )}
                </div>
                <div className={`${visibleNavLink?("scale-100"):("scale-0 hidden")}transition-all ease-in duration-300`}>
                <div className={`w-screen h-screen transition-all ease-in duration-300  sm:invisible flex items-center justify-center ${visibleNavLink?("relative"):("absolute")}`}>
                    <div className={`flex ${visibleNavLink?("scale-100"):("scale-0")} transition-all  ease-in duration-300 text-center text-xl font-bold flex-col gap-4`}>
                    <div className={`hover:scale-125 relative ${location.pathname=="/"?("scale-125"):("")} transition-all ease-in duration-100`}>
                        <Link to={"/"}><span className={`text-amber-400 ${location.pathname=="/"?("text-gray-500"):("")} hover:text-gray-500 transition-all ease-in duration-100`}>HOME</span></Link>
                            <div className={`absolute right-0 top-1`}>
                                <p className={`text-amber-500 text-sm ${location.pathname=="/"?("opacity-100"):"opacity-0"}`}>Current</p>
                            </div>
                        </div>
                        <div className={`hover:scale-125 relative ${location.pathname=="/projects"?("scale-125"):("")} transition-all ease-in duration-100`}>
                        <Link to={"/projects"}><span className={`text-amber-400 ${location.pathname=="/projects"?("text-gray-500"):("")} hover:text-gray-500 transition-all ease-in duration-100`}>PROJECTS</span></Link>
                            <div className={`absolute right-0 top-1`}>
                                <p className={`text-amber-500 text-sm ${location.pathname=="/projects"?("opacity-100"):"opacity-0"}`}>Current</p>
                            </div>
                        </div>
                        <div className={`hover:scale-125 relative ${location.pathname=="/services"?("scale-125"):("")} transition-all ease-in duration-100`}>
                        <Link to={"/services"}><span className={`text-amber-400 ${location.pathname=="/services"?("text-gray-500"):("")} hover:text-gray-500 transition-all ease-in duration-100`}>SERVICES</span></Link>
                            <div className={`absolute right-0 top-1`}>
                                <p className={`text-amber-500 text-sm ${location.pathname=="/services"?("opacity-100"):"opacity-0"}`}>Current</p>
                            </div>
                        </div>
                        <div className={`hover:scale-125 relative ${location.pathname=="/languages"?("scale-125"):("")} transition-all ease-in duration-100`}>
                        <Link to={"/languages"}><span className={`text-amber-400 ${location.pathname=="/languages"?("text-gray-500"):("")} hover:text-gray-500 transition-all ease-in duration-100`}>LANGUAGES</span></Link>
                            <div className={`absolute -right-4 top-1`}>
                                <p className={`text-amber-500 text-sm ${location.pathname=="/languages"?("opacity-100"):"opacity-0"}`}>Current</p>
                            </div>
                        </div>
                        <div className={`hover:scale-125 relative ${location.pathname=="/skills"?("scale-125"):("")} transition-all ease-in duration-100`}>
                        <Link to={"/skills"}><span className={`text-amber-400 ${location.pathname=="/skills"?("text-gray-500"):("")} hover:text-gray-500 transition-all ease-in duration-100`}>SKILLS</span></Link>
                            <div className={`absolute -right-4 top-1`}>
                                <p className={`text-amber-500 text-sm ${location.pathname=="/skills"?("opacity-100"):"opacity-0"}`}>Current</p>
                            </div>
                        </div>
                        <div className={`hover:scale-125 relative ${location.pathname=="/education"?("scale-125"):("")} transition-all ease-in duration-100`}>
                        <Link to={"/education"}><span className={`text-amber-400 ${location.pathname=="/education"?("text-gray-500"):("")} hover:text-gray-500 transition-all ease-in duration-100`}>EDUCATION</span></Link>
                            <div className={`absolute -right-4 top-1`}>
                                <p className={`text-amber-500 text-sm ${location.pathname=="/education"?("opacity-100"):"opacity-0"}`}>Current</p>
                            </div>
                        </div>
                        <div className={`hover:scale-125 relative ${location.pathname=="/contact"?("scale-125"):("")} transition-all ease-in duration-100`}>
                        <Link to={"/contact"}><span className={`text-amber-400 ${location.pathname=="/contact"?("text-gray-500"):("")} hover:text-gray-500 transition-all ease-in duration-100`}>CONTACT</span></Link>
                            <div className={`absolute -right-4 top-1`}>
                                <p className={`text-amber-500 text-sm ${location.pathname=="/contact"?("opacity-100"):"opacity-0"}`}>Current</p>
                            </div>
                        </div>
                        <div className="transition-all duration-100 ease-in hover:scale-125">
                        <Link to={"https://drive.google.com/uc?export=download&id=1Udv05cbu2-8yNAlnqQb3p39JJzbgs3FT"}><span className="transition-all duration-100 ease-in text-amber-400 hover:text-gray-500">DOWNLOAD RESUME</span></Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default Navbar;