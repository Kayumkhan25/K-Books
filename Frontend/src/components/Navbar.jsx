import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider"; // Import the custom hook
import Logout from "./Logout";
import IfLogin from "./IfLogin";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const { authUser } = useAuth(); // Use the custom hook here
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const element = document.documentElement;

  // Handle theme
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navbar items
  const navItems = (
    <>
      <li>
        <Link to="/" className="dark:hover:text-green-500">Home</Link>
      </li>
      <li>
        <Link to="/Library" className="dark:hover:text-green-500">Library</Link>
      </li>
      <li>
        <Link to="/about" className="dark:hover:text-green-500">About</Link>
      </li>
      <li>
        <Link to="/contact" className="dark:hover:text-green-500">Contact</Link>
      </li>
    </>
  );

  const darkMode = (
    <div>
      <label className="grid cursor-pointer place-items-center">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 text-green-500 bg-green-300 checked:bg-blue-300"
        />
        {/* <svg
          className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg> */}
      </label>
    </div>
  );

  return (
    <nav className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 bg-slate-50 text-black
      ${sticky ? 
      "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" :
      "shadow-sm shadow-green-200"
      }
      dark:bg-slate-900 dark:text-white dark:shadow-slate-700
    `}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-40 p-2 shadow font-bold bg-slate-100
                            dark:bg-slate-900"
                        >
                       {navItems}
                    </ul>
                </div>
                <Link to="/" className="cursor-pointer ">
                    <img src={Logo} alt="logo-image" className="w-40 md:w-48 px-2 py-1 h-full"/>
                </Link>
            </div>
            <div className="navbar-end gap-x-3">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-x-1 menu-horizontal text-lg px-1">
                    {navItems}
                    </ul>
                </div>
                
                <div>{darkMode}</div>
                <div>
                    {
                        authUser ? 
                        (<Logout />) :
                        (<IfLogin />)  
                    }
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
