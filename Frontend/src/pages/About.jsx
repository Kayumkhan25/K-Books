import React, { useEffect } from "react";

import TopAbout from "../components/common/About/TopAbout";
import Story from "../components/common/About/Story";
import Achievement from "../components/common/About/Achievement";
import Brief from "../components/common/About/Brief";

const About = () => {
  
  useEffect(() => {
    document.title= "K-Books | About"
  }, [])
  
  return (
    <section className="max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen pt-24 pb-4 md:pb-10 md:pt-28">
      <div className="flex flex-col gap-y-16 md:gap-y-24">
        {/* Section 1 */}
        <div className="text-center">
          <TopAbout />
        </div>
      
        <div className="bg-slate-700 w-full h-[.5px]">
        </div>

        {/* Section 2 */}
        <div>
          <Story />
        </div>
        
        {/* Section 3 */}
        <div className="mx-4">
          <Achievement />
        </div>
        
        {/* Section 4 */}
        <div className="pb-20">
          <Brief/>
        </div>
      </div>
    </section>
  )
}

export default About