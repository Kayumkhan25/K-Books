import React, {useEffect} from "react";

import Top from "../components/common/Library/Top";
import Course from "../components/common/Library/Course";

const Library = () => {
  
  useEffect(() => {
    document.title = "K-Books | Library"
  }, [])
  
  return (
    <section className="max-w-screen-2xl container mx-auto md:px-22 px-4 min-h-screen pt-24 pb-8 md:pb-10 md:pt-28">
      <Top />
      <Course />
    </section>
  )
}

export default Library