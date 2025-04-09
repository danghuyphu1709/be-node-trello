import express from "express";
import morgan from "morgan";
import { connectToDatabase, getDatabase } from "./config/mongodb";
const app = express();

const StartServer = async () => {
  try {
    const hostname = "192.168.0.17";
    const port = 8080;
    app.use(morgan("dev"));

    app.get("/", (req, res) => {
      res.end("<h1>Hello World!</h1><hr>");
    });

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
