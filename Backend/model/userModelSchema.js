import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name required"],
        minLength: [3, "first name must contain minimum 3 letters"]
    },
    lastName: {
        type: String,
        required: [true, "last name required"],
        minLength: [3, "last name must contain minimum 3 letters"]
    },
    email: {
        type: String,
        unique: [true, "email already used!"],
        required: [true, "email required!"],
        validate: [validator.isEmail, "please provide valid email"]        
    },
    password: {
        type: String,
        required: [true, "password required!"],
        minLength: [8, "password must contain minimum 8 letters"]
    },
    confirmPassword: { 
        type: String,
        required: [true, "confirm password required!"],
        minLength: [8, "password must contain minimum 8 letters"]
    },
});

const User = mongoose.model("User", userSchema);
export default User;
