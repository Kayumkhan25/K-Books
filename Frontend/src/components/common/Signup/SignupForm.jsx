import React, { useState } from "react"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const SignupForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
        
    // const [formData, setFormData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // })
    
    const [showCreatePass, setShowCreatePass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const navigate = useNavigate();
    
    // function changeHandler(event) {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [event.target.name]: event.target.value
    //     }));
    // }
    
    // function submitHandler(event) {
    //     event.preventDefault();
    //     if (formData.password !== formData.confirmPassword) {
    //         toast.error("Passwords are not same");
    //         return;
    //     }
    //     setIsLoggedIn(true); 
    //     toast.success("Account created");
    //     const accountData = {
    //         ...formData
    //     };
    //     const finalData = {
    //         ...accountData
    //     }
        
    //     console.log("Printing Fina A/C data");
    //     console.log(finalData);
         
    //     navigate("/dashboard");
    // }
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const submitHandler = (data) => {
        console.log(data);
        if (data.password !== data.confirmpassword) {
            toast.error("Passwords are not same");
            return;
        }
        setIsLoggedIn(true); 
        toast.success("Account created");
        const accountData = {
            ...formData
        };
        const finalData = {
            ...accountData
        }
        
        console.log("Printing Fina A/C data");
        console.log(finalData);
            
        navigate("/dashboard");

      };
    
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-y-4 text-sm">
            <div className="flex justify-between gap-x-3">
                <label className="w-full">
                    <p className="mb-1 text-[15px]">First Name<sup className="text-red-500">*</sup></p>
                    <input 
                        type="text"
                        name="firstName"
                        // value={formData.firstName}
                        // onChange={changeHandler}
                        placeholder="Enter your first name"
                        className="text-[16px] text-black border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                        {...register("firstname", { required: true })}
                    />
                    {errors.firstname && <p className="text-red-500 leading-8 pl-1">This field is required</p>}
                </label>
                <label className="w-full">
                    <p className="mb-1 text-[15px]">Last Name<sup className="text-red-500">*</sup></p>
                    <input
                        type="text"
                        name="lastName"
                        // value={formData.lastName}
                        // onChange={changeHandler}
                        placeholder="Enter your last name" 
                        className="text-[16px] text-black border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                        {...register("lastname", { required: true })}                        
                    />
                    {errors.lastname && <p className="text-red-500 leading-8 pl-1">This field is required</p>}
                </label>
            </div>
            <label>
                <p className="mb-1 text-[15px]">Email Address<sup className="text-red-500">*</sup></p>
                <input 
                    type="email"
                    name="email"
                    // value={formData.email}
                    // onChange={changeHandler}
                    placeholder="Enter email address"
                    className="text-[16px] text-black border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                    {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 leading-8 pl-1">This field is required</p>}
            </label>
            <div className="flex justify-between gap-x-3">
                <label className="relative w-full">
                    <p className="mb-1 text-[15px]">Create password<sup className="text-red-500">*</sup></p>
                    <input 
                        type={showCreatePass ? ("text") : ("password")}
                        name="password"
                        className="pr-9 text-[16px] text-black border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                        // value={formData.password}
                        // onChange={changeHandler}
                        placeholder="Enter password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <p className="text-red-500 leading-8 pl-1">This field is required</p>}
                    <span className="absolute right-2 cursor-pointer top-11"
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
                        className="pr-9 text-[16px] text-black border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                        // value={formData.confirmPassword}
                        // onChange={changeHandler}      
                        placeholder="confirm password"
                        {...register("confirmpassword", { required: true })}
                    />
                    {errors.confirmpassword && <p className="text-red-500 leading-8 pl-1">This field is required</p>}
                    <span className="absolute right-2 cursor-pointer top-11"
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