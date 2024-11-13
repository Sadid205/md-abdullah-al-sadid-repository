import { useEffect, useState } from "react"
import {ProjectsData} from "../Data/ProjectsData" 
import { Link, useParams } from "react-router-dom"
const ProjectDetails = () => {
    const [imageAndTitle,setImageAndTitleUrl] = useState("") 
    const {project_id} = useParams()
    const projectData = ProjectsData.find((project)=>project.id==project_id)
    useEffect(()=>{
        if(projectData){
            setImageAndTitleUrl(projectData.details.img_and_title[0])
        }
    },[projectData])
    const changeImage =(e,src)=>{
        e.preventDefault()
        setImageAndTitleUrl(src)        
        console.log(e)
    }
    console.log(projectData)
    return (
        <div className="h-full top-24 sm:w-11/12 sm:ms-auto">
           <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap -mx-4">
                        {/* Product Images */}
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <img style={{height:'50%'}} src={imageAndTitle.img_link} alt="Product" className="w-full rounded-lg shadow-md mb-4" id="mainImage" />
                            <div className="">
                                <p className="text-gray-400 font-semibold">{imageAndTitle.title}</p>
                            </div>
                            <div className="flex h-1/2 gap-4 py-4 justify-center overflow-x-auto">
                                {
                                    projectData && projectData.details.img_and_title.map((item,index)=>{
                                        return <img onClick={(e)=> changeImage(e,item)} key={index} src={item.img_link} alt="Thumbnail" className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300" />
                                    })
                                    // 
                                }
                            </div>
                        </div>
                        {/* Product Details */}
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-3xl font-bold text-gray-400 mb-2">{projectData && projectData.name}</h2>
                            <p className="text-gray-400 font-semibold mb-4">Category : {projectData && projectData.category}</p>
                            <div className="mb-4 items-center flex gap-4">
                                <Link className="text-gray-400" to={projectData&&projectData.github_link}>
                                   GitHub
                                </Link>
                                <Link className="text-gray-400 font-semibold border border-amber-400 rounded rounded-full px-2 transition-all ease-in duration-100 hover:scale-110" to={projectData&&projectData.web_link}>
                                Live link
                                </Link>
                            </div>
                            <div className="flex items-center mb-4">
                                <span className="text-gray-400 font-semibold">Rating : {projectData && projectData.rating}</span>
                            </div>
                            <p className="text-gray-400 font-semibold mb-6">Description : {projectData && projectData.description}</p>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-400">Technology :</h3>
                                <div className="overflow-x-auto gap-4 flex">
                                    {projectData && projectData.details.technology.map((tech,index)=>{
                                        return <div key={index}  className="w-32 text-center">
                                        <img width={200} className="" src={tech.tech_logo} alt="tech_logo" />
                                        <h4 className="font-semibold text-gray-400">{tech.tech_name}</h4>
                                </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="mt-6 max-h-96 overflow-y-auto">
                    <h1 className="text-gray-400 mb-4 text-3xl font-bold text-center">Key Features</h1>
                    {projectData && projectData.details.key_features.map((features,index)=>{
                    return <p  key={index} className="bg-sky-300 rounded-full hover:cursor-pointer hover:bg-transparent hover:text-gray-200 transition-all ease-in duration-200 p-2 text-gray-600 mb-2 font-semibold">⇒ {features}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails