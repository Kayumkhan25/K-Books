import React from "react";
import Banner from "../components/common/Home/Banner";
import Unpaid from "../components/common/Home/Unpaid";

const Home = () => {
  return (
    <div className="min-h-screen">   
        <div>
          <Banner />
        </div>
        <div className="my-9 md:my-12">
          <Unpaid />
        </div>
        
    </div>
  )
}

export default Home