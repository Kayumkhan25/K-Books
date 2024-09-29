import React from "react";

import About1 from "../../../assets/images/AboutImg/About1.jpg";
import About2 from "../../../assets/images/AboutImg/About2.jpg";
import About3 from "../../../assets/images/AboutImg/About3.jpg";

const TopAbout = () => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-14">
        {/* Section 1 */}
        <div className="px-4 md:px-20">
            <p className="text-2xl md:text-4xl font-semibold">
            Behind the Ink: <span className="gradient_color"> Discovering the Story of Our Passion for Books</span>
            
            </p>
        </div>
        <div className="-mt-8 md:-mt-2 px-4 md:px-20 text-lg md:text-xl dark:text-slate-400">
            <p>
            Welcome to our book website! Here, we celebrate the magic of storytelling, 
            offering a curated selection of inspiring reads, author insights, and a community for fellow book lovers to connect.
            </p> 
        </div>
        
        {/* Section 2 */}
        <div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12">
            <img src={About1} alt="" className="rounded-md w-[25rem] h-[18rem] md:h-[20rem] shadow-[1px_1px_14px_5px] dark:shadow-green-500"/>
            <img src={About2} alt="" className="rounded-md  w-[25rem] h-[18rem] md:h-[20rem] shadow-[1px_1px_14px_5px] dark:shadow-green-500"/>
            <img src={About3} alt="" className="rounded-md w-[25rem] h-[18rem] md:h-[20rem] shadow-[1px_1px_14px_5px] dark:shadow-green-500"/>
            </div>
        </div>
        
        {/* Section 3 */}
        <div>
            <div>
                <div>
                    <p className="text-xl md:text-4xl font-semibold">
                        We are passionate about revolutionizing the way we learn.
                        Our innovative platform 
                        <span className="gradient_color">
                            &nbsp;combines technology,  
                        </span>
                        <span className="bg-gradient-to-tr from-red-400 from-30% to-yellow-600 to-70% text-transparent inline-block bg-clip-text font-bold">
                            &nbsp;expertise
                        </span>
                        , and community to create an
                        <span className="bg-gradient-to-tr from-red-400 from-30% to-yellow-600 to-70% text-transparent inline-block bg-clip-text font-bold"> 
                            &nbsp;unparalleled educational experience.
                        </span>
                    </p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopAbout