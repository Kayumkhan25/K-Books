import React from "react"
import SignupForm from "./common/Signup/SignupForm";
import LoginForm from "./common/Login/LoginForm";
import { Link } from "react-router-dom";

const Templete = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className="min-h-screen md:flex justify-between w-11/12 mt-16 py-12 md:py-16 max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="max-w-[450px] w-11/12 md:order-2">
            <h1 className="font-semibold text-3xl">{title}</h1>
            <p className="my-5">
              <span className="text-xl font-medium">{desc1}</span><br />
              <span className= "text-lg font-medium text-green-500 italic leading-1">{desc2}</span>
            </p>
            {formType === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
            (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
            
            <div className="flex w-full items-center my-4 leading-[1.375rem]">
                <div className="w-full h-[2px] bg-[#2c333f] dark:bg-slate-400"></div>
                <p className="text-[#2c333f] dark:text-slate-300 font-medium leading-6 px-1">OR</p>
                <div className="w-full h-[2px] dark:bg-slate-400 bg-[#2c333f]"></div>
            </div>
            
              <div className="w-full flex justify-center items-center px-2 py-2  rounded-lg text-lg font-medium text-red-500
                  
              ">
                {
                  formType === "signup" ?
                  (
                    <div>
                      Already have account? <Link to="/login" className="underline text-blue-500 font-semilbold">Log in</Link>
                    </div>
                  ) :
                  (<div>
                    New User? <Link to="/signup" className="underline text-blue-500 font-semibold">Sign Up</Link>
                  </div>)
                }
                
              </div>

        </div>
        
        <div className=
        {`${
          formType === "signup" ? 
          ("md:pt-16 pt-10 md:order-1") :
          ("md:pt-8 pt-16 md:order-1")
        } `} >
            <img src={image} className="lg:w-[480px] lg:h-[455px] shadow_effect rounded-full"
                
              alt="reading" loading="lazy"/>
        </div>
        
    </div>
  )
}

export default Templete;