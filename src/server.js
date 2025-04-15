import express from "express";
import morgan from "morgan";
import { connectToDatabase, getDatabase } from "./config/mongodb";
import { v1Routes } from "./routes/v1/index.js";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware";
import ApiError from "./utils/ApiError";
import 'dotenv/config'
const app = express();

const StartServer = async () => {
  try {
    const hostname = process.env.APP_HOST || "192.168.0.17";
    const port = process.env.APP_PORT || 8080;
    app.use(morgan("dev"));

    // Body parser middleware
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Set up CORS
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    // Set up routes
    app.use("/api/v1", v1Routes);
    
    // Handle 404 errors
    app.use(errorHandlingMiddleware);

    // Handle other errors
   

    // Start the server
    app.listen(port, hostname, () => {
      console.log(`Server running ${hostname}:${port}`);
    });
  } catch (error) {
    console.error("Lỗi hệ thống khi chạy:", error);
  }
};

// Connect to MongoDB database

connectToDatabase()
  .then(() => {
    console.log("Kết nối đến MongoDB thành công!");
  })
  .then(() => {
    StartServer();
  })
  .catch((error) => {
    console.error("Lỗi kết nối đến MongoDB:", error);
  });
