import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
  {
    postId: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comments", CommentSchema);

export default Comment;
