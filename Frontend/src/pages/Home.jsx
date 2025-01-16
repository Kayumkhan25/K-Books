import React, { useEffect } from "react";
import Banner from "../components/common/Home/Banner";
import Unpaid from "../components/common/Home/Unpaid";

const Home = () => {
   
  useEffect(() => {
    document.title = "K-Books | Home"
  }, [])
  
  return (
    <section className="min-h-min">   
        <div>
          <Banner />
        </div>
        <div className="my-9 md:my-12">
          <Unpaid />
        </div>
        
    </section>
  )
}

export default Home