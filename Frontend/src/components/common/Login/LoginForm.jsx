import React from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";

const LoginForm = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
    

    // function changeHandler(event) {
    //     setFormData([
    //       (prev) => [
    //         {
    //           ...prev,
    //           [event.target.name]: event.target.value,
    //         },
    //       ],
    //     ]);
    //   }
    
    // const [formData, setFormData] = useState({
    //     email: "",
    //     password: ""
    // });
    // console.log(setFormData);
     
    // function submitHandler (event) {
    //     event.preventDefault();
    //     setIsLoggedIn(true);
    //     toast.success("Logged In");
    //     navigate("/");
    // }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const submitHandler = (data) => {
        console.log(data);
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/");
      };
    
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-y-4 text-sm"> 
            <label className="relative">
                <p className="mb-2 text-[15px]">
                    Email Address<sup className="text-red-500">*</sup>
                </p>
                <input type="email"  
                    className="text-[16px] text-black border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                    name="email"  placeholder="Enter email id" 
                    // onChange={changeHandler}  
                     {...register("email", { required: true })}/>
                     {errors.email && <p className="text-red-500 leading-8 pl-1">This field is required</p>}
            </label>
            <label className="relative">
                <p className="mb-2 text-[15px]">
                    Password<sup className="text-red-500">*</sup>
                </p>
                <input type={showPassword ? ("text") : ("password")} 
                    className="pr-9 text-[16px] text-black border-t-[1px] rounded-lg shadow-md shadow-green-600 p-3 w-full"
                    name="password"  placeholder="Enter Password" 
                    // onChange={changeHandler} 
                    {...register("password", { required: true })}
                />
                {errors.password && <p className="text-red-500 leading-8 pl-1">This field is required</p>}
                <span className="absolute right-2 top-11 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
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