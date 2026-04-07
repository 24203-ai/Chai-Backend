// require("dotenv").config({path: './env'});
import dotenv from "dotenv";


import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});



connectDB()
.then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful database connection
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    }
    );
})

.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
});


/*
import express from "express";
const app = express();


;(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL + DB_NAME);      
    console.log("Connected to MongoDB");
    app.on("error", (error) => {
      console.error("Error in Express app:", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();
*/
