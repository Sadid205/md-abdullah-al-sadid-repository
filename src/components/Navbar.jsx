import { FaHouseChimneyUser } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {useState } from "react";
// import HomePage from "./HomePage";
const Navbar = ()=>{
    const [visibleNavLink,setVisibleNavLink] = useState(false)
    return (
        <div className="w-full sm:w-32 fixed z-99 sm:flex">
                <div className="w-full backdrop-blur transition-all duration-300 ease-in sm:w-32 flex sm:flex-col px-3 sm:py-5 sm:h-screen">
                    <div className="logo w-1/6 h-16 my-auto mx-auto flex items-center justify-center bg-amber-400 sm:w-24 sm:h-24 rounded-xl hover:cursor-pointer hover:bg-yellow-300">
                        <h1 className="font-bold ease-in duration-300 hover:scale-110 text-xl">A2S</h1>
                    </div>
                    <div className="icon flex items-center sm:rounded-xl sm:mt-4 w-4/5 h-24  sm:w-24 m-auto sm:h-5/6 ">
                        <div className="bg-amber-500 p-4  rounded-full invisible sm:visible  m-auto flex  sm:flex-col gap-4">
                            <Link className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <span className="text-white text-2xl"><FaHouseChimneyUser /></span>
                            </Link>
                            <Link className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <span className="text-white text-2xl"><IoIosColorPalette /></span>
                            </Link>
                            <Link className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <span className="text-white text-2xl"><AiTwotoneMail /></span>
                            </Link>
                            <Link className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <span className="text-white text-2xl"><SiBookstack /></span>
                            </Link>
                            <Link className="flex hover:scale-125 transition-all ease-in duration-200 invisible sm:visible justify-center">
                                <span className="text-white text-2xl"><FaFileDownload /></span>
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
                        <Link><span className="text-white">HOME</span></Link>
                        </div>
                        <div>
                        <Link><span className="text-white">PORTFOLIO</span></Link>
                        </div>
                        <div>
                        <Link><span className="text-white">CONTACT</span></Link>
                        </div>
                        <div>
                        <Link><span className="text-white">BLOG</span></Link>
                        </div>
                        <div>
                        <Link><span className="text-white">DOWNLOAD CV</span></Link>
                        </div>
                    </div>
                </div>
               <div>
               </div>
            </div>
    )
}


export default Navbar;