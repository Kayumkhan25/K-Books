import React, { useState } from "react"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loading2 from "../../Loading2";

const SignupForm = () => {
  
    const [showCreatePass, setShowCreatePass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
        
    // initialization
    const {
        register, // to register input fields
        handleSubmit, // to handle form submission
        watch, // to watch for changes in form values
        formState: { errors } //Object containing form validation errors
      } = useForm();
      
      const submitHandler = async (data) => {
        // Check if the passwords match
        if (data.password !== data.confirmpassword) {
          toast.error("Passwords do not match!");
          return; // Prevent the request from being sent if passwords don't match
        }
      
        const userInfo = {
          firstName: data.firstname,
          lastName: data.lastname,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmpassword
        };
        setLoader(true);
        try {
          const res = await axios.post("https://k-books-rl2y.onrender.com/user/signup", userInfo);
      
          // Log the successful response data
          console.log("Signup Response:", res.data);
          const { message, user } = res.data;
          if (user) {
            // Save user info to localStorage
            localStorage.setItem("Users", JSON.stringify(user)); // convert object into string
            // Debug: Check if the user is saved correctly
            console.log("User saved to localStorage:", JSON.parse(localStorage.getItem("Users")));
            toast.success(message || "Signup successful!");
            navigate("/"); 
            window.location.reload();
            } else {
            toast.error("Unexpected API response. Please try again.");
            }
        } catch (err) {
          // Log the full error response for debugging
          console.error("Signup Error:", err);
          
          if (err.response) {
            // If the error response contains data, log it
            console.log("Error response data:", err.response.data);
            toast.error(err.response?.data?.message || "An error occurred during signup.");
          } else {
            // If there's no response, it might be a network error
            toast.error("Network error. Please try again.");
          }
        }
        finally {
            setLoader(false); // Re-enable the button when request is complete
        }
      };
      
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
                        className="text-[16px] text-black bg-white dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-sm shadow-green-500 p-3 mb-4 md:mb-0 w-full"
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
                        className="text-[16px] text-black bg-white dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-sm shadow-green-500 p-3 w-full"
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
                    className="text-[16px] text-black bg-white dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-sm shadow-green-500 p-3 w-full"
                    {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 leading-8 text-right pr-2">This field is required</p>}
            </label>
            <div className="md:flex justify-between gap-x-3">
                <label className="relative w-full ">
                    <div className="flex gap-1">
                        <p className="mb-1 text-[15px]">Create password<sup className="text-red-500">*</sup></p>
                        <FaRegQuestionCircle className="text-sm text-yellow-500 "/>
                        <div className="tooltip">
                            Password must be at least 8 characters long, include at least one uppercase, one lowercase letter, one number, and one special character.
                        </div>
                    </div>
                    <input 
                        type={showCreatePass ? ("text") : ("password")}
                        name="password"
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                        className="pr-10 text-[16px] text-black bg-white dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-sm shadow-green-500 p-3 w-full  mb-4 md:mb-0"
                        placeholder="Enter password"
                        {...register("password", { required: true })}
                    />
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
                    <div className="flex gap-1">
                        <p className="mb-1 text-[15px]">Confirm password<sup className="text-red-500">*</sup></p>
                    </div>

                    <input 
                        type={showConfirmPass ? ("text") : ("password")}
                        name="confirmPassword"
                        className="pr-10 text-[16px] text-black bg-white dark:bg-slate-900 dark:text-white border-t-[1px] rounded-lg shadow-sm shadow-green-500 p-3 w-full"
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                        placeholder="confirm password"
                        {...register("confirmpassword", { required: true })}
                    />
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
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 py-2 px-3 mt-6 rounded-lg font-medium text-xl text-slate-900 transition-all duration-300">
                {
                  loader ? (<div><Loading2 /></div>) :
                  (<div>
                    Create User
                  </div>
                    
                    )
                }
            </button>
        </form>
    </div>
  )
}

export default SignupForm;