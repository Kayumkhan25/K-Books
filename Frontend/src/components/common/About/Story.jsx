import React from "react";

import About4 from "../../../assets/images/AboutImg/About4.jpg"

const Story = () => {
  return (
    <div className="">
        
        {/* Section 1 */}
        <div className="px-4">
            <div className="flex flex-col md:flex-row justify-between gap-16">
                <div className="w-full md:w-1/2 p-4 rounded-md dark:bg-slate-900">
                    <div className="mb-8">
                        <h1 className="bg-gradient-to-r from-green-500 from-20% via-teal-500 via-60% to-emerald-500 inline-block text-transparent bg-clip-text
                        text-4xl font-semibold">
                            Our Founding Story
                        </h1>
                    </div>
                    <div className="dark:text-slate-400 mb-7 text-[15px]">
                        <p>
                        Our journey began in a small coffee shop, where a shared passion for storytelling brought us together. 
                        As avid readers, we often discussed our favorite books, exchanging recommendations and insights. 
                        We realized there was a vibrant community of book lovers yearning for a space to connect, share, and discover new stories.
                        </p>
                    </div>
                    <div className="dark:text-slate-400 text-[15px]">
                        <p>
                        Today, our website stands as a testament to that initial spark of inspiration. 
                        Each page reflects our dedication to promoting authors, sharing their stories, and connecting with fellow book enthusiasts. 
                        Join us on this literary adventure as we continue to explore the boundless world of books!
                        </p>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2">
                    <img src={About4} alt="" className="h-[350px] w-[650px] rounded-lg shadow-[1px_2px_12px_4px] dark:shadow-green-500"/>
                </div> 
            </div>
        </div>
        
        {/* Section 2 */}
        <div className="px-4">
            <div className="mt-28 flex flex-col md:flex-row justify-between gap-16">
                <div className="w-full md:w-1/2  p-4 rounded-md dark:bg-slate-800">
                    <h2 className="bg-gradient-to-tr from-yellow-600 from-40% to-orange-500 to-70% inline-block bg-clip-text text-4xl mb-8 font-semibold text-transparent">
                        Our Vision
                    </h2>
                    <p className="dark:text-slate-400 text-[15px]">
                    Fueled by our love for literature, we decided to create a platform that celebrates the written word. 
                    Our vision was to curate a diverse collection of books that not only entertain but also inspire, educate, and provoke thought. 
                    We wanted to foster a community where readers could come together, engage in meaningful conversations, and explore the richness of literature.
                    </p>
                </div>
                
                <div className="w-full md:w-1/2 p-4 rounded-md dark:bg-slate-900 ">
                    <h2 className="bg-gradient-to-tr from-teal-600 from-30% via-emerald-400 via-50% to-cyan-500 to-80% bg-clip-text text-4xl mb-8 font-semibold text-transparent">Our Mission</h2>
                    <p className="dark:text-slate-400 text-[15px]">
                    At K-Books, our mission is to celebrate the transformative power of literature by connecting readers with diverse stories that inspire, educate, and entertain. 
                    We strive to create a welcoming community where book lovers can share their passions, discover new voices, and engage in meaningful conversations about the written word. 
                    Through curated selections, author spotlights, and enriching content, we aim to foster a lifelong love of reading and support the literary landscape. 
                    Together, let’s explore the endless possibilities that books offer!
                    </p>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Story