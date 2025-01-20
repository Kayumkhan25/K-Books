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
          password: data.password,
        };
      
        try {
          const response = await axios.post("https://k-books-rl2y.onrender.com/user/login", userInfo);
      
          // Check if response contains the expected fields
          const { message, user } = response.data;
          
          // If the user data is available in the response
          if (user) {
            console.log("Login Success:", user);
            localStorage.setItem("Users", JSON.stringify(user));  // Store user info in localStorage
            toast.success(message);  // Show success toast with the message
            // Redirect after login
            setTimeout(() => {
              navigate("/");
              window.location.reload();
            }, 3000);
          } else if (message) {
            toast.success(message); // If no user, show the message in the toast
          } else {
            toast.error("Unexpected API response.");
            console.log("Response doesn't contain expected fields:", response.data);
          }
        } catch (error) {
          // Error handling
          if (error.response && error.response.status === 401) {
            toast.error("Invalid email or password.");
          } else {
            toast.error("An error occurred during login.");
          }
          console.error("Login Error:", error);
        }
      };
          
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-y-4 text-sm"> 
            <label className="relative">
                <p className="mb-2 text-[15px]">
                    Email Address<sup className="text-red-500">*</sup>
                </p>
                <input type="email"  
                    className="text-[16px] text-black bg-white dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-sm shadow-green-500 p-3 w-full"
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
                    className="pr-10 text-[16px] text-black bg-white dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-sm shadow-green-500 p-3 w-full"
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