import React from "react";
import banner from "../../../assets/images/banner.png";

const Banner = () => {
    
    const email = (
        <label className="input input-bordered flex items-center gap-2
             dark:bg-slate-800
            ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow " placeholder="Email" />
        </label>
    )
    
  return (
    <div>
        <div className="max-w-screen-2xl container mx-auto md:px-20 my-8 md:my-6 px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mt-10 md:mt-32 order-2 md:order-1">
                <div className="md:space-y-10 space-y-6">
                    <h1 className='text-2xl md:text-4xl font-semibold'>
                        Hello, Welcome to Your <span className="text-green-500">Gateway to Knowledge!</span>
                    </h1>
                    <p className="text-lg md:text-xl">
                        "Discover the joy of reading with our curated selection of books!
                        Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, we have something for every reader."
                    </p>
                    {email}
                </div>
                <button className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-700 text-white mt-5 md:mt-6 transition-all duration-300">Success</button>
            </div>
            <div className="w-full md:w-1/2 order-1  ">
                <img src={banner} alt="banner" className="w-11/12 md:w-full md:h-full px-5 "/>
            </div>
        </div>
    </div>
  )
}

export default Banner