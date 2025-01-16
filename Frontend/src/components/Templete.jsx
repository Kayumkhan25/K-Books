import React from "react"
import SignupForm from "./common/Signup/SignupForm";
import LoginForm from "./common/Login/LoginForm";
import { Link } from "react-router-dom";

const Templete = ({title, desc1, desc2, image, formType}) => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row gap-x-4 justify-evenly items-center w-11/12 mt-16 py-10 max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className=
        {`
          ${
          formType === "signup" ? 
          ("md:pt-12 pb-10") :
          ("pb-12 md:pb-1")
        } `} >
        <img src={image} className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] shadow_effect rounded-full"
          alt="reading" loading="lazy"/>
      </div>
      <div className="max-w-[450px] w-11/12 mx-auto">
        <h1 className="font-semibold text-3xl">{title}</h1>
        <p className="my-5">
          <span className="text-xl font-medium">{desc1}</span><br />
          <span className= "text-lg font-medium text-green-500 italic leading-1">{desc2}</span>
        </p>
        {formType === "signup" ?
        (<SignupForm />) :
        (<LoginForm />)}
        
        <div className="flex w-full items-center my-4 leading-[1.375rem]">
            <div className="w-full h-[2px] bg-[#2c333f] dark:bg-slate-400"></div>
            <p className="text-[#2c333f] dark:text-slate-300 font-medium leading-6 px-1">OR</p>
            <div className="w-full h-[2px] dark:bg-slate-400 bg-[#2c333f]"></div>
        </div>
        
        <div className="w-full flex justify-center items-center px-2 py-2  rounded-lg text-lg font-medium text-red-500">
          {
            formType === "signup" ?
            (
              <div>
                Already have account? <Link to="/login" className="underline text-blue-500 font-semibold">Log in</Link>
              </div>
            ) :
            (<div>
              New User? <Link to="/signup" className="underline text-blue-500 font-semibold">Sign Up</Link>
            </div>)
          } 
        </div>
      </div>
    </section>
  )
}

export default Templete;