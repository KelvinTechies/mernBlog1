import mongoose from "mongoose";

const postModels = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Posts", postModels);

export default Post;
