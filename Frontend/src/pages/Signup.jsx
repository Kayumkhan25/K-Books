import React from "react";
import signupImg from "../assets/images/signup.jpg";
import Templete from "../components/Templete";

const Signup =({ setIsLoggedIn }) => {
  return (
    <Templete 
    title="Join the Reading Revolution!"
    desc1="Your Next Favorite Book is Just a Signup Away!"
    desc2="Embark on Your Reading Adventure."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}  
  />
  );
}

export default Signup;
