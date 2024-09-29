import React from "react";
import Company from "./common/Footer/Company";
import Skills from "./common/Footer/Skills";
import Bottom from "./common/Footer/Bottom";

const Footer = () => {
  return (
    <div className="footer_section bg-slate-100 mx-10 rounded-2xl border border-green-300 dark:bg-slate-900">
       <div className="mx-auto max-w-full py-8 lg:flex justify-evenly px-3 hidden">
           <div>
               <Company />
           </div>
           <div className="bg-green-700 w-[.5px]"></div>
           <div>
               <Skills />
           </div>  
       </div>
       <div className="hidden md:block max-w-[80rem] w-full h-[.5px] mx-auto bg-slate-700"></div>
       <div className="p-10 max-w-[80rem] mx-auto">
           <Bottom />
       </div>
    </div>
  )
}

export default Footer