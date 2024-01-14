import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "my-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

import {
  createPost,
  getApost,
  getAllPost,
  getOnePaginatedPost,
  updatePost,
  sportsCatrgories,
  getAllPaginatedPost,
  deletPost,
} from "../Controllers/PostController.js";
const postRoute = express.Router();

postRoute.post("/", upload.single("file"), createPost);
postRoute.get("/", getAllPost);
postRoute.get("/getOnePaginatedPost", getOnePaginatedPost);
postRoute.get("/getAllPaginatedPost", getAllPaginatedPost);
postRoute.get("/dashboard/blog", getAllPost);
postRoute.get("/dashboard/edit/:id", getApost);
postRoute.get("/category/:Category", sportsCatrgories);
postRoute.get("/:id", getApost);
postRoute.put("/:id", upload.single("file"), updatePost);
postRoute.delete("/:id", deletPost);

export default postRoute;
