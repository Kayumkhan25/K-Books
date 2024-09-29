import React from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaEarthAsia } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";

const ContactDetails = () => {
  return (
    
    <div className="px-10 py-12">
        <div className="mb-10">
            <p className="flex gap-x-2 font-semibold text-xl">
                <HiChatBubbleLeftRight className="dark:text-slate-300"/>
                Chat on us
            </p>
            <div className="p-1 text-green-800 font-semibold dark:text-slate-400">
                <p>Our friendly team is here to help.</p>
                <p>KBooks@info.com</p>
            </div>
        </div>
        <div className="mb-10">
            <p className="flex gap-x-2 font-semibold text-xl">
                <FaEarthAsia className="dark:text-slate-300"/>
                Visit us
            </p>
            <div className="p-1 text-green-800 font-semibold dark:text-slate-400">
                <p>Come and say hello at our office HQ.</p>
                <p>XYZ, Bangalore-560016</p>
            </div>
        </div>
        <div>
            <p className="flex gap-x-2 font-semibold text-xl">
                <LuPhoneCall className="dark:text-slate-300"/>
                Call us
            </p>
            <div className="p-1 text-green-800 font-semibold dark:text-slate-400">
                <p>Mon - Fri From 9am to 5pm</p>
                <p>+123 456 7869</p>   
            </div>

        </div>
    </div>

  )
}

export default ContactDetails