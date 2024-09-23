import React from "react";
import Cards from "../Home/Cards";

import list from  "../../../list.json";


const Course = () => {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      {
        list.map((item) => (
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default Course