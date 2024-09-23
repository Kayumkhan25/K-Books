import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div>
        <div className="text-center justify-center">
            <h1 className="text-2xl md:text-4xl font-semibold mb-5">
                We're thrilled you visited! 
                
            </h1>
            <div className="text-green-500 text-2xl md:text-4xl font-semibold "> Happy reading!</div>
            <p className="w-11/12 mx-auto mt-9 md:mt-12 text-lg mb-4">
                "Thank you for exploring our collection!
                 Each story has the power to transport you to different realms, ignite your creativity, and connect you with the hearts and minds of others. 
                 We hope you leave with a book that brings you joy and inspiration!"
            </p>
            <Link to="/">
              <button className="my-5 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all  duration-300">
                Back
              </button>
            </Link>
        </div>
    </div>
  )
}

export default Top