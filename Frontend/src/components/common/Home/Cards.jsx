import React from "react";

const Cards = ({item}) => {
    // console.log(item);   
    
  return (
    <div>
        <div className="mt-4 my-6">
            <div className="card bg-base-10 w-80 mx-auto lg:w-[370px] shadow-sm bg-slate-100 border-t-[1px] border-green-900 shadow-green-300 my-2 hover:scale-105 duration-300 hover:shadow-md hover:shadow-slate-400
                dark:bg-slate-900
            ">
                <figure className="h-56 ">
                    <img
                    src={item.image}
                    alt="Book"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between w-11/12 mx-auto">
                        <div className="badge border-2 border-green-400 font-semibold px-4 py-3">Rs.{item.price}/-</div>
                        <div className=" border-2 border-green-600 bg-green-600 rounded-full cursor-pointer text-white px-3 py-[2px] hover:bg-green-700 hover:font-[500] hover:border-green-500 transition-all duration-300">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards