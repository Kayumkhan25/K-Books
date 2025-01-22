import User from "../model/userModelSchema.js";
import bcryptjs from "bcryptjs";
import validator from 'validator';

// Signup
export const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, ...extraFields } = req.body;
        
        if (Object.keys(extraFields).length > 0) {
            return res.status(400).json({
                message: `Extra fields are not allowed: ${Object.keys(extraFields).join(", ")}`
            });
        }

        // Check if email already exists 
        const userEmail = await User.findOne({ email });
        if (userEmail) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // Validate password and confirmPassword
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Create and save user
        const newUser = new User({ firstName, lastName, email, password });
        await newUser.save();

        // Send success response
        res.status(201).json({
            message: `Welcome ${newUser.firstName}! YOU HAVE SUCCESSFULLY REGISTERD`,
            user: {
                firstName: newUser.firstname,
            }
        }); 
    } catch (error) {
        // Handle validation errors
        if (error.name === "ValidationError") {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ message: errors });
        } 
        console.error("Error in storing data: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}; 

// login
export const login = async (req, res) => {
    try {
        const { email, password, ...extraFields } = req.body;
        // Check for extra fields
        if (Object.keys(extraFields).length > 0) {
            return res.status(400).json({
                message: `Extra fields are not allowed: ${Object.keys(extraFields).join(", ")}`
            });
        }

        // Check if required fields are missing
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Please provide a valid email address" });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User does not exist" });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Send success response
        res.status(200).json({
            message: `Login successfully, Welcome ${user.firstName}!`
        });
    } catch (error) {
        console.error("Error during login: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};