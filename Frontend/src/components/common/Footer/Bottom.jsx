import React from "react";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Bottom = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-y-7 py-1">
        
      {/* Section 1 */}
      <div className="flex gap-x-2 text-slate-600 justify-evenly dark:text-slate-400">
        <p className="cursor-pointer hover:text-slate-400 dark:hover:text-slate-200">Privacy Policy</p>
        <div className="bg-gray-600 w-[1px]"></div>
        <p className="cursor-pointer hover:text-slate-400 dark:hover:text-slate-200">Cookie Policy</p>
        <div className="bg-gray-600 w-[1px]"></div>
        <p className="cursor-pointer hover:text-slate-400 dark:hover:text-slate-200">Terms</p>
      </div>
      
      {/* Section 2 */}
      <div>
        <p className="italic font-semibold text-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
      
      {/* Section 3 */}
      <div className="grid grid-flow-col justify-evenly gap-4">
          <a href="https://github.com/Kayumkhan25" target="_blank" className="hover:text-slate-500 dark:hover:text-slate-300" >
              <PiGithubLogoFill size={30} 
              />
          </a>
          <a href="https://www.linkedin.com/in/kayum-khan2501/" target="_blank" className="hover:text-slate-500 dark:hover:text-slate-300" >
              <FaLinkedinIn size={30} />
          </a>
          <a href="mailto: kayum9721@gmail.com" target="_blank" className="hover:text-slate-500 dark:hover:text-slate-300" >
              <MdMail size={30}/>
          </a>
      </div>
    </div>
  )
}

export default Bottom