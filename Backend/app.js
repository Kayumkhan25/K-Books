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
const FRONTEND_URL = process.env.FRONTEND_URL;
const DEPLOY_URL = process.env.DEPLOY_URL;

// Connect to the database
dbConnection();

// List of allowed origins
const allowedOrigins = [
  FRONTEND_URL,                // Local development 
  DEPLOY_URL,                  // Specific deployment URL
  /\.vercel\.app$/,            // Allow all Vercel subdomains dynamically
];


// CORS Options
const corsOptions = {
  origin: (origin, callback) => {
    if (
      !origin || // Allow tools like Postman without an origin
      allowedOrigins.some((allowedOrigin) =>
        typeof allowedOrigin === "string"
          ? allowedOrigin === origin // Exact match
          : allowedOrigin.test(origin) // Regular expression match
      )
    ) {
      callback(null, true);
    } else {
      console.error(`CORS error: Origin ${origin} not allowed`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));

app.use(express.json()); // Parse JSON bodies
app.use(urlencoded({ extended: true })); // Parse URL-encoded bodies

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.get("/library", (req, res) => {
  res.status(200).send("Library page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact page");
});

app.get("/login", (req, res) => {
  res.status(200).send("Login page");
});

app.get("/signup", (req, res) => {
  res.status(200).send("SignUp page");
});


// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Default export for server startup
export default app;
