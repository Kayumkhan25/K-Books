import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";

const app = express(); 

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

dbConnection();

// Set up CORS middleware to only allow requests from the frontend URL
app.use(cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // You can expand the methods here
    credentials: true,
}));

app.use(express.json());
app.use(urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Server is running");
});

// user route
app.use("/book", bookRoute);
app.use("/user", userRoute);

export default app;