import React from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";

import axios from "axios";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const submitHandler = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password  
        } 
        await axios
        .post("http://localhost:8080/user/login", userInfo)
        .then ((res) => {
            console.log(res.data);
            if(res.data) {
                toast.success("Log In Successfully");    
                setTimeout(() => {
                    navigate("/");              
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                }, 3000);
            }
        }) .catch ((err) => {
            if(err.response) {
                console.log(err);
                toast.error("error", err.response.data);
                setTimeout(() => {
                    
                }, 3000);
            }
        })
    };
    
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-y-4 text-sm"> 
            <label className="relative">
                <p className="mb-2 text-[15px]">
                    Email Address<sup className="text-red-500">*</sup>
                </p>
                <input type="email"  
                    className="text-[16px] text-black bg-slate-100 dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                    name="email"  placeholder="Enter email id" 
                    // onChange={changeHandler}  
                     {...register("email", { required: true })}/>
                     {errors.email && <p className="text-red-500 leading-8 text-right pr-2">This field is required</p>}
            </label>
            <label className="relative">
                <p className="mb-2 text-[15px]">
                    Password<sup className="text-red-500">*</sup>
                </p>
                <input type={showPassword ? ("text") : ("password")} 
                    className="pr-10 text-[16px] text-black bg-slate-100 dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                    name="password"  placeholder="Enter Password" 
                    // onChange={changeHandler} 
                    {...register("password", { required: true })}
                />
                {errors.password && <p className="text-red-500 leading-8 text-right pr-2">This field is required</p>}
                <span className="absolute right-2 top-10 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEye fontSize={25} fill="#AFB2BF"/>) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)}
                </span>
                
                <Link to="#">
                    <p className="text-sm font-[550] underline mt-2 text-red-500 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>
            </label>
            <button type="submit" className="bg-yellow-400 border border-yellow-500 hover:bg-yellow-500 py-2 px-3 mt-6 rounded-lg font-medium text-lg text-[#000815] transition-all duration-300">
                Log In
            </button>
        </form>
    </div>
  )
}

export default LoginForm;