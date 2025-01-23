import React from "react";
import {useAuth} from "../context/AuthProvider"
import toast from "react-hot-toast";

const Logout = () => {
  const { authUser, setAuthUser } = useAuth(); 
    
    const logoutHandler = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users");
            toast.success("log out successfully");
            window.location.reload();

        } catch (error) {
            toast.error("Error: ", error.message);
        }
    }
    
  return (
    <div>
        <button className="px-2 py-2 w-20 bg-red-500 hover:bg-red-600 text-white cursor-pointer rounded-lg"
            onClick={logoutHandler}
        >
            log out
        </button>
    </div>
  )
}

export default Logout