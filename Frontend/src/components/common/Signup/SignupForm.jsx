import React, { useState } from "react"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import axios from "axios";

const SignupForm = () => {
 
    
    const [showCreatePass, setShowCreatePass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const navigate = useNavigate();
        
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const submitHandler = async (data) => {
        if (data.password !== data.confirmpassword) {
            toast.error("Passwords are not same");
            return;
        }
        const userInfo = {
            firstName: data.firstname,
            lastName: data.lastname,
            email: data.email,
            password: data.password,
            confirmPassword : data.confirmpassword   
        } 
         await axios
        .post("http://localhost:8080/user/signup", userInfo)
        .then ((res) => {
            console.log(res.data);
            if(res.data) {
                toast.success("Sign Up Successfully");    
                setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                }, 3000);          
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        }) .catch ((err) => {
            if(err.response) {
                console.log(err);
                toast.error("error", err.response.data);
            }
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-y-4 text-sm">
            <div className="md:flex justify-between gap-x-3">
                <label className="w-full">
                    <p className="mb-1 text-[15px]">First Name<sup className="text-red-500">*</sup></p>
                    <input 
                        type="text"
                        name="firstName"
                        // value={formData.firstName}
                        // onChange={changeHandler}
                        placeholder="Enter your first name"
                        className="text-[16px] text-black bg-slate-100 dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 mb-4 md:mb-0 w-full"
                        {...register("firstname", { required: true })}
                    />
                    {errors.firstname && <p className="text-red-500 leading-8 text-right pr-2">This field is required</p>}
                </label>
                <label className="w-full">
                    <p className="mb-1 text-[15px]">Last Name<sup className="text-red-500">*</sup></p>
                    <input
                        type="text"
                        name="lastName"
                        // value={formData.lastName}
                        // onChange={changeHandler}
                        placeholder="Enter your last name" 
                        className="text-[16px] text-black bg-slate-100 dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                        {...register("lastname", { required: true })}                        
                    />
                    {errors.lastname && <p className="text-red-500 leading-8 text-right pr-2">This field is required</p>}
                </label>
            </div>
            <label>
                <p className="mb-1 text-[15px]">Email Address<sup className="text-red-500">*</sup></p>
                <input 
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className="text-[16px] text-black bg-slate-100 dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                    {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 leading-8 text-right pr-2">This field is required</p>}
            </label>
            <div className="md:flex justify-between gap-x-3">
                <label className="relative w-full">
                    <p className="mb-1 text-[15px]">Create password<sup className="text-red-500">*</sup></p>
                    <input 
                        type={showCreatePass ? ("text") : ("password")}
                        name="password"
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                        className="pr-10 text-[16px] text-black bg-slate-100 dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full  mb-4 md:mb-0"
                        placeholder="Enter password"
                        {...register("password", { required: true })}
                    />
                     <div class="tooltip z-10">
                        Password must be at least 8 characters long, include at least one uppercase, one lowercase letter, one number, and one special character.
                    </div>
                    {errors.password && <p className="text-red-500 leading-8 text-right pr-2">This field is required</p>}
                    <span className="absolute right-2 cursor-pointer top-9"
                        onClick={() => setShowCreatePass(!showCreatePass)}
                        >
                        {showCreatePass ? (
                            <AiOutlineEye fontSize={25} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEyeInvisible fontSize={25} fill="#AFB2BF" />
                        )}
                    </span>
                </label>
                <label className="relative w-full">
                    <p className="mb-1 text-[15px]">Confirm password<sup className="text-red-500">*</sup></p>
                    <input 
                        type={showConfirmPass ? ("text") : ("password")}
                        name="confirmPassword"
                        className="pr-10 text-[16px] text-black bg-slate-100 dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                        placeholder="confirm password"
                        {...register("confirmpassword", { required: true })}
                    />
                    <div class="tooltip">
                        Password must be at least 8 characters long, include at least one uppercase, one lowercase letter, one number and one special character.
                    </div>
                    {errors.confirmpassword && <p className="text-red-500 leading-8 text-right pr-2">This field is required</p>}
                    <span className="absolute right-2 cursor-pointer mt-2 md:top-7"
                        onClick={() => setShowConfirmPass(!showConfirmPass)}
                        >
                        {showConfirmPass ? (
                            <AiOutlineEye fontSize={25} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEyeInvisible fontSize={25} fill="#AFB2BF" />
                        )}
                    </span>
                </label>
            </div>
            <button type="submit" className="bg-yellow-400 border border-yellow-500 hover:bg-yellow-500 py-2 px-3 mt-6 rounded-lg font-medium text-lg text-[#000815] transition-all duration-300">
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm;