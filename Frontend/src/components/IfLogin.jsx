import React from "react";
import { Link } from "react-router-dom";


const IfLogin = () => {
  return (
    <div className="flex gap-x-2">
        <Link to="/login" className="">
            <button className="px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 rounded-md bg-green-800 text-white hover:bg-green-600 duration-300"  
            >
                login
            </button>
        </Link>
        <Link to="/signup" className="">
            <button className="px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 rounded-md bg-green-800 text-white hover:bg-green-600 duration-300"  
            >
                signup
            </button>
        </Link>
    </div>
  )
}

export default IfLogin