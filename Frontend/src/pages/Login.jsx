import React, {useEffect} from "react";
import loginImg from "../assets/images/login.jpg";
import Templete from "../components/Templete";

const Login = () => {
  
  useEffect(() => {
    document.title = "K-Books | Login"
  }, [])
  
  return (
    <Templete 
      title="Log In to Continue Your Journey"
      desc1="Rejoin the Adventure and Discover More Books!"
      desc2="Enter to Unlock Exclusive Content and Recommendations."
      image={loginImg}
      formType="login" 
    />
  );
}

export default Login;
