import { EducationData } from "../Data/EducationData"
const Education = ()=>{
    return (
        <div className="h-full w-11/12 m-auto flex flex-col gap-4 sm:ms-auto">
             <div className="border-b flex justify-between mb-8 mt-4 border-dashed">
                <h1 className="font-bold text-xl text-gray-500">EDUCATION</h1>
                <h1 className="text-gray-600 font-bold text-xl">04</h1>
            </div>
            {EducationData.map((data,index)=>{
                return <div className="flex justify-between p-4" style={{background:"#1A1A1A"}} key={index}>
                    <div>
                        <h1><span className="font-bold text-xl text-amber-400">{data.id}.</span><span className="font-bold text-xl uppercase text-white">{data.institute_name}</span></h1>
                        <button className="bg-gray-500 p-1 rounded-md">{data.session}</button>
                    </div>
                    <div>
                        <p className="text-gray-200">{data.description}</p>
                    </div>
                </div>
            })}
        </div>
    )
}


export default Education