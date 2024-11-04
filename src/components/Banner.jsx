import backgroundImage from "../../src/assets/portfoliobg.jpg";
import ProfileImg from "../../src/assets/Profile.jpg"
import AutoTyper from "./AutoTyper";
const Banner = ({services,languages})=>{
    return (
        <div className="h-full sm:w-11/12 sm:ms-auto max-h-screen overflow-y-auto">
            <div style={{height:"50vh"}} className="rounded-xl">
            <div style={{
            backgroundImage:`url(${backgroundImage})`,
            backgroundSize:"Cover",
            backgroundPosition:"center",
            height:"100%",
            borderRadius:"10px"
            }} className="">
                <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <div className="w-52 h-52 border border-2 border-yellow-500 rounded rounded-full flex items-center justify-center overflow-hidden">
                        <img className="w-full h-full transition-all ease-in duration-300 hover:scale-110 hover:cursor-pointer" src={ProfileImg} alt="Profile" />
                    </div>
                    <h1 className="font-bold text-2xl text-white">MD.ABDULLAH AL SADID</h1>
                    <AutoTyper/>
                </div>
            </div>
        </div>
        {services}
        {languages}
        </div>
    )
}

export default Banner;