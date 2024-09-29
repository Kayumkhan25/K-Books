import React from "react";

import { NavLink } from "react-router-dom";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "K-Books partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "K-Books partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "K-Books partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "K-Books partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "K-Books partners with more than 275+ leading universities and companies to bring",
  },
];

const Brief = () => {
  return (
    <div>
        <div className="grid mx-auto max-w-7xl lg:w-fit grid-cols-1 lg:grid-cols-4 px-2">
            {LearningGridArray.map((card, i) => {
            return (
                <div
                key={i}
                className={`${i === 0 && "lg:col-span-2 lg:h-[294px]"}  ${card.order % 2 === 1
                    ? "bg-slate-100 dark:bg-slate-800 h-[294px]"
                    : card.order % 2 === 0
                        ? "bg-slate-200 dark:bg-slate-900 h-[294px]"
                        : "bg-transparent"
                    } ${card.order === 3 && "lg:col-start-2"}  `}
                >
                {card.order < 0 ? (
                    <div className="lg:w-[90%] flex flex-col gap-3 pb-10 lg:pb-0">
                      <div className="text-4xl font-semibold">
                          {card.heading}{" "}
                          <span className="gradient_color">
                          {card.highlightText}
                          </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">
                          {card.description}
                      </p>

                      <div className="w-fit mt-2 font-semibold text-slate-900 bg-yellow-400 px-4 py-3 rounded-md
                          hover:bg-yellow-500 transition-all duration-300
                      ">
                          <NavLink to={card.BtnLink}>
                              {card.BtnText}
                          </NavLink>
                      </div>
                    </div>
                ) : (
                    <div className="p-8 flex flex-col gap-8">
                      <h1 className="text-lg font-semibold">{card.heading}</h1>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">
                          {card.description}
                      </p>
                    </div>
                )}
                </div>
            );
            })}
        </div>
    </div>
  )
}

export default Brief