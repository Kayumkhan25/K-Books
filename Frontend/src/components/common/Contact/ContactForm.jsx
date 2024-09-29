import React from "react";
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import CountryCode from '../../../data/CountryCode.json';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const ContactForm = () => {
    
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phonenumber: "",
        message: ""
    })
    
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }
    
    function submitHandler (event) {
        event.preventDefault();
        // setIsLoggedIn(true);
        toast.success("Message Send Successfully");
        navigate("/");
    }
    
  return (
    <div className="px-12 py-12">
        <div className="mb-8">
            <p className="text-3xl md:text-4xl font-semibold mb-3">Got a Idea? We've got the skills. Let's team up</p>
            <p className="text-lg dark:text-slate-400 font-semibold">Tell us more about yourself and what you're got in mind.</p>
        </div>
        
        <div>
            <form className="form flex flex-col gap-y-4 text-sm" onSubmit={submitHandler}>
                <div className="flex flex-col md:flex-row justify-between gap-x-5 mb-3">
                    <label className="w-full">
                        <p className="pl-[2px] mb-1 font-[550] text-[15px] leading-6">First Name<sup className="text-red-500">*</sup></p>
                        <input 
                            type="text"
                            name="firstName"
                            className="dark:bg-slate-800 mb-5 md:mb-0"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={changeHandler}
                            required
                        />
                    </label>
                    <label className="w-full">
                        <p className="pl-[2px] mb-1 text-[15px] leading-6">Last Name<sup className="text-red-500">*</sup></p>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name" 
                            value={formData.lastName}
                            onChange={changeHandler}
                            required
                            className="dark:bg-slate-800"
                        />
                    </label>
                </div>
                <label className="mb-3">
                    <p className="pl-[2px] mb-1 text-[15px] leading-6">Email Address<sup className="text-red-500">*</sup></p>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={changeHandler}
                        required
                        className="dark:bg-slate-800"
                        
                    />
                </label>
                
                
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="phonenumber" className="pl-[2px] mb-1 text-[15px] leading-6">
                    Phone Number
                    </label>

                    <div className="flex gap-5">
                        <div className="flex w-[81px] flex-col gap-2">
                            <select
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="Enter first name"
                                className="pl-[2px] mb-1 leading-6 dark:bg-slate-800"
                                {...register("countrycode", { required: true })}
                                >
                                {CountryCode.map((ele, i) => {
                                return (
                                <option key={i} value={ele.code}>
                                {ele.code} -{ele.country}
                                </option>
                                )
                                })}
                                </select>
                        </div>

                        <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                            <input
                            type="number"
                            name="phonenumber"
                            id="phonenumber"
                            value={formData.phonenumber}
                            onChange={changeHandler}
                            placeholder="01234 56789"
                            className="pl-[2px] mb-1 leading-6 dark:bg-slate-800"                           
                            />
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="message" className="pl-[2px] mb-1 text-[15px] leading-6">
                    Message<sup className="text-red-500">*</sup>
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Enter your message here"
                    value={formData.message}
                    onChange={changeHandler}
                    className="pl-[2px] mb-1 leading-6 dark:bg-slate-800"
                    required
                   />
                </div>
                <button type="submit" className=" bg-yellow-400 text-black font-semibold w-full mt-2 text-xl py-2 rounded-md cursor-pointer hover:bg-yellow-500 transition-all duration-300">Send Message</button>
            </form>
        </div>            
    </div>
  )
}

export default ContactForm