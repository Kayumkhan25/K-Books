import React from "react";
import { Link } from "react-router-dom";


const IfLogin = () => {
  return (
    <div className="flex gap-x-2">
        <Link to="/login" className="">
            <button className="px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-600 duration-300"  
            >
                login
            </button>
        </Link>
        <Link to="/signup" className="">
            <button className="px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-600 duration-300"  
            >
                signup
            </button>
        </Link>
    </div>
  )
}

export default IfLogin