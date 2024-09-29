import React from "react";

const Stats = [
    { count: "6K", label: "Active Students" },
    { count: "250+", label: "Books" },
    { count: "60+", label: "Awards" },
    { count: "15+", label: "Guides" },
];

const Achievement = () => {
  return (
    <div className="rounded-lg bg-slate-100 dark:bg-slate-900">
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {
            Stats.map((data, index) => {
              return (
                <div key={index} className="p-8">
                  <h2 className="text-2xl md:text-4xl text-center font-semibold">
                    {data.count}
                  </h2>
                  <h3 className="text-center text-[16px] text-slate-500 dark:text-slate-400 md:text-lg">
                    {data.label}
                  </h3> 
                </div>
              )
            })
          } 
        </div>
    </div>
  )
}

export default Achievement