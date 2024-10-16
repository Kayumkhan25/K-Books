import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";

const app = express();


app.use(cors(
    {}
));
app.use(express.json());

// To use .env file
dotenv.config();

const Port = process.env.Port || 3000 ;
const URL = process.env.MongoDBUrl;

try {
    mongoose.connect(URL);
    console.log("Database Connected");
} catch (error) {
    console.log("Get error: ", error);
}

app.get("/", (req, res) => {
    res.send("Server is running"); 
})

// user route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(Port, () => {
    console.log(`app is listen on port ${Port}`);
})