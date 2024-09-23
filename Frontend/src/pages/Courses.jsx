import React from "react";

import Top from "../components/common/Courses/Top";
import Course from "../components/common/Courses/Course";

const Courses = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen pt-24 pb-8 md:pb-10 md:pt-28">
      <Top />
      <Course />
    </div>
  )
}

export default Courses