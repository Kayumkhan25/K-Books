import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
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
            required: [true, "Password is required"],
            validate: {
                validator: function (value) {
                    // Regex for password complexity
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
                },
                message:
                    "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one special character, and one number.",
            },
        },
    },
    {
        strict: "throw", // Strict mode to throw an error for extra fields
    }
);


// Pre-save middleware to hash the password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcryptjs.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", userSchema);
export default User;
