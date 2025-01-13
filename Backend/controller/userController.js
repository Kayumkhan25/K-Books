import User from "../model/userModelSchema.js";
import bcryptjs from "bcryptjs";

// Signup
export const signup = async (req, res) => {
    try {
        const {firstName, lastName, email, password, confirmPassword} = req.body;
        const userEmail = await User.findOne({email});
        if(userEmail) {
            return res.status(400).json({message: "User Already Exists"});
        }
        else{
            if(password === confirmPassword) {
                const hashPassword = await bcryptjs.hash(password, 10);
                const hashConfirmPassword = await bcryptjs.hash(confirmPassword, 10);
                const createdUser = new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hashPassword,
                    confirmPassword: hashConfirmPassword
                });
                
                await createdUser.save();
                res.status(201).json({message: "User created successfully!", user: {
                    firstName: createdUser.firstName,
                    email: createdUser.email,
                    _id: createdUser._id
                }});
            } else {
                res.status(500).json({message: "Passwords are not same"}); 
            }    
        }
    } catch (error) { 
        console.log("Error in storing data: ", error);
        res.status(500).json({message: "Internal server error"});
    } 
}

// log in
export const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!user || !isMatch) {
            return res.status(401).json({message: "Invalid email or password"});
        } else {
            res.status(200).json({
                message: "Login Successfully", 
                user: {
                    firstName: user.firstName,
                    email: user.email, 
                    _id: user._id
            }});
        }
        
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({message: "User not exist"});  
    }
} 
