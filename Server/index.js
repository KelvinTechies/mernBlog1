import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./Database/Db.js";
import router from "./Routers/UserRoutes.js";
import postRoute from "./Routers/PostRoutes.js";
import commentRouter from "./Routers/Comment.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/my-uploads", express.static("my-uploads"));

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("/post", postRoute);
app.use("/", commentRouter);

const PORT = 7000;

const start = () => {
  connectDB(process.env.MONGO_URI)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`Server in listening on Port http://localhost:${PORT}/`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

start();
