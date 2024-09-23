import React from "react";
import loginImg from "../assets/images/login.jpg";
import Templete from "../Components/Templete";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Templete 
        title="Log In to Continue Your Journey"
        desc1="Rejoin the Adventure and Discover More Books!"
        desc2="Enter to Unlock Exclusive Content and Recommendations."
        image={loginImg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}  
    />
  );
}

export default Login;
