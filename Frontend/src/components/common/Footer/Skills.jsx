import React from "react";
import { Link } from "react-router-dom";

const subjects = [
    "Al",
    "Data Analytics",
    "Data Science",
    "Data Visualization",
    "Cloud Computing",
    "Code Foundations",
    "Computer Science",
    "Cybersecurity",
    "Developer Tools",
    "Web Design",
    "Web Development",
    "DevOps",
    "Game Development",
    "IT",
    "Machine Learning",
    "Math",
    "Mobile Development",
]

const languages = [
    "HTML & CSS",
    "JavaScript",
    "Bash",
    "C++",
    "C#",
    "Go",
    "Java",
    "Kotlin",
    "PHP",
    "Python",
    "R",
    "Ruby",
    "SQL",
    "Swift",
]

const careers = [
    "Career paths",
    "Career services",
   "Interview prep",
   "Professional certification",
    "Full Catalog",
    "Beta Content",
]

const Skills = () => {
  return (
    <div className="flex gap-x-20">
        {/* Section 1 */}
        <div>
            <p className="text-xl mb-2 font-semibold">Subjects</p>
            <div className="flex flex-col gap-2 dark:text-slate-400 text-slate-500 font-semibold mb-3 ">
                {
                    subjects.map((el, i) => {
                    return (
                        <div
                            key={i}
                            className="text-[14px] cursor-pointer hover:text-slate-400 dark:hover:text-slate-200 transition-all duration-200"
                        >
                            <Link to={el.toLowerCase()}>{el}</Link>
                        </div>
                    )
                    }) 
                } 
            </div>
        </div>
        
        {/* Section 2 */}
        <div>
            <p className="text-xl mb-2 font-semibold">Languages</p>
            <div className="flex flex-col gap-2 dark:text-slate-400 text-slate-500 font-semibold mb-3">
                {
                    languages.map((el, i) => {
                    return (
                        <div
                            key={i}
                            className="text-[14px] cursor-pointer hover:text-slate-400 dark:hover:text-slate-200 transition-all duration-200"
                        >
                            <Link to={el.toLowerCase()}>{el}</Link>
                        </div>
                    )
                    }) 
                }
            </div>
            
        </div>
        
        {/* Section 3 */}
        <div>
            <p className="text-xl mb-2 font-semibold">Career building</p>
            <div className="flex flex-col gap-2 dark:text-slate-400 text-slate-500 font-semibold mb-3">
                {
                    careers.map((el, i) => {
                    return (
                        <div
                            key={i}
                            className="text-[14px] cursor-pointer hover:text-slate-400 dark:hover:text-slate-200 transition-all duration-200"
                        >
                            <Link to={el.toLowerCase()}>{el}</Link>
                        </div>
                    )
                    }) 
                }
            </div>
        </div>
        
    </div>
  )
}

export default Skills