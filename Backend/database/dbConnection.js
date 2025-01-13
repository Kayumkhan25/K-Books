import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Check if MONGO_URL is set in .env file
const connectionString = process.env.MONGO_URL;

if (!connectionString) {
  console.error("MONGO_URL is not defined in the .env file");
  process.exit(1);  // Exit the process if MONGO_URL is missing
}

export const dbConnection = () => {
  mongoose
    .connect(connectionString, {
      dbName: "K-Books"
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.error("Error in connecting to database", error);
      process.exit(1); // Exit the process if connection fails
    });
};
