import React from "react";
import { Link } from "react-router-dom"; 
import NotFoundImg from "../assets/images/NotFoundImg.png";

const NotFound = () => {
  return (
    <div className="text-center max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen pt-24 pb-4 md:pb-10 md:pt-28 flex flex-col gap-1 items-center justify-center bg-slate-100
        dark:bg-slate-950
    ">
      <img src={NotFoundImg} alt="404" className="not-found-image" />
      <h1 className="text-5xl text-slate-700  dark:text-slate-100">404 - Page Not Found</h1>
      <p className="text-xl text-slate-600 mt-3  dark:text-slate-300">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="not-found-link">Back to Home</Link>
    </div>
  );
};

export default NotFound;
