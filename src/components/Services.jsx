import { data } from "../Data/ServicesData"

const Services = ()=>{
    return (
        <div className="h-full sm:w-11/12 sm:ms-auto">
           <div className="flex mb-8 justify-between p-2 border-b border-dashed">
            <h1 className="text-gray-600 font-bold text-xl">SERVICES</h1>
                <h1 className="text-gray-600 font-bold text-xl">01</h1>
            </div>
            <div className="flex flex-wrap m-auto gap-4">   
                {data.map((item,index)=>{
                    return <div style={{background:"#1A1A1A"}} className="w-96 p-4 m-auto h-52 rounded rounded-md" key={index}>
                        <h1><span className="text-yellow-400 font-bold text-xl">{item.number}.</span><span className="font-bold text-white text-xl">{item.title}</span></h1>
                        <p className="text-gray-300 font-base mt-3">{item.description}</p>
                    </div>
                    })}            
            </div>
        </div>
    )
}

export default Services;