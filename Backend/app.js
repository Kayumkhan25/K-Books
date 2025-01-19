// app.js
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";

const app = express();
dotenv.config();

// Environment Variables
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const DEPLOY_URL = process.env.DEPLOY_URL;

// Connect to the database
dbConnection();

// List of allowed origins
const allowedOrigins = [DEPLOY_URL, FRONTEND_URL];

// CORS Options
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests from allowed origins or no origin (like Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS error: Origin ${origin} not allowed`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
  credentials: true, // Allow cookies or authentication headers
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON bodies
app.use(urlencoded({ extended: true })); // Parse URL-encoded bodies

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Default export for server startup
export default app;
