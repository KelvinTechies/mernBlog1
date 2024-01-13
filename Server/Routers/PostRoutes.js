import express from "express";
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

postRoute.post("/", createPost);
postRoute.get("/", getAllPost);
postRoute.get("/getOnePaginatedPost", getOnePaginatedPost);
postRoute.get("/getAllPaginatedPost", getAllPaginatedPost);
postRoute.get("/dashboard/blog", getAllPost);
postRoute.get("/dashboard/edit/:id", getApost);
postRoute.get("/category/:Category", sportsCatrgories);
postRoute.get("/:id", getApost);
postRoute.put("/:id", updatePost);
postRoute.delete("/:id", deletPost);

export default postRoute;
