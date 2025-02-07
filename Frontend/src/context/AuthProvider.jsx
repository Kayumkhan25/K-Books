import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext(); // create new context object

export default function AuthProvider({ children }) {
  // Initialize state
  const [authUser, setAuthUser] = useState(null);

  // For side effects(loading user data)
  useEffect(() => {
    const initialAuthUser = localStorage.getItem("Users");

    if (initialAuthUser) {
      try {
        const parsedUser = JSON.parse(initialAuthUser); // parse data in json format
        setAuthUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); // consume a context object
