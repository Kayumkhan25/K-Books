import React, { useEffect, useState } from "react";
import Cards from "../Home/Cards";

// import list from  "../../../list.json";

import axios from "axios";


const Course = () => {
  
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const getBook = async () => {
      try {
        // use axios to get data from backend
        const res = await axios.get("http://localhost:8080/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getBook(); 
  }, []);
  
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      {
        books.map((item) => (
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default Course