import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";

const app = express(); 

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const DEPLOY_URL = process.env.DEPLOY_URL;

dbConnection();

// List of allowed origins (frontend URL and others)
const allowedOrigins = [
    DEPLOY_URL, FRONTEND_URL
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      // Check if the origin is in the allowed list
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error('Not allowed by CORS')); // Reject the request
      }
    },
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
    credentials: true, // Allow credentials (cookies, authorization headers)
  };
  // Apply CORS middleware to your app
  app.use(cors(corsOptions));
  

app.use(express.json());
app.use(urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Server is running");
});

// user route
app.use("/book", bookRoute);
app.use("/user", userRoute);

export default app;