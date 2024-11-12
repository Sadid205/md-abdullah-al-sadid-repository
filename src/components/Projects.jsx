import { useState } from "react"
import { ProjectsData } from "../Data/ProjectsData"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
const allCategory = ["all",...new Set(ProjectsData.map((item)=>item.category))]

const Projects = ()=>{
    const [projects,setProjects] = useState(ProjectsData)
    const [categories,setCategories] = useState(allCategory)

    const filterItems = (category_name)=>{
        const newItems = ProjectsData.filter((project)=>project.category===category_name)
        setProjects(newItems)
        // console.log(projects)
        if(category_name==="all"){
            setProjects(ProjectsData)
            return 
        }
        console.log(newItems)
    }
    return (
        <div className="h-full sm:w-11/12 sm:ms-auto">
            <div className="border-b flex justify-between mb-8 mt-4 border-dashed">
                <h1 className="font-bold text-xl text-gray-500">MY RESENT WORKS</h1>
                <h1 className="text-gray-600 font-bold text-xl">05</h1>
            </div>
            <div className="flex gap-4 items-center justify-center flex-wrap">
                {categories.map((category,index)=>(
                    <button className="border-2 z-50 hover:rotate-6 transition-all ease-in hover:scale-110 uppercase font-bold p-2 rounded-full text-gray-200 border-amber-400" key={index} onClick={()=> filterItems(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex mt-10 flex-wrap gap-4">
                {
                    projects.map((item,index)=>(
                        <div className="w-80 hover:cursor-pointer duration-300 relative  transition-all ease-in  m-auto h-72" key={index}>
                            <div className="w-full h-full">
                                <img className="w-full h-full object-cover" src={item.cover} alt="projectsIMG" />
                            </div>
                            <div className="absolute opacity-0 hover:opacity-100 top-0 left-0 flex transition-all ease-in duration-300 flex-col w-full h-full items-center justify-center bg- hover:bg-amber-400 ">
                                {/* <h3 className="font-semibold text-gray-700 text-md uppercase">{item.title}</h3> */}
                                <span className="font-bold text-gray-600">{item.name}</span>
                                <p className="text-sm font-semibold text-center text-gray-500">{item.description?.slice(0,200)}</p>
                                <div className="flex gap-4">
                                <Link className="text-xl transition-all ease-in duration-300 hover:scale-125" to={item.github_link}><FaGithub /></Link>
                                <Link className="border hover:scale-110 border-gray-500 font-semibold text-gray-600 bg-gray-300 transition-all ease-in duration-300 rounded-full px-2 text-sm" to={item.web_link}>Visit</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects