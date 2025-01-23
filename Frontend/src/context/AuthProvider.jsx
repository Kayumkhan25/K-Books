import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Initialize state
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const initialAuthUser = localStorage.getItem("Users");

    if (initialAuthUser) {
      try {
        const parsedUser = JSON.parse(initialAuthUser);
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

export const useAuth = () => useContext(AuthContext);
