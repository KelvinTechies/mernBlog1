import Comment from "../Models/CommentModels.js";
import Post from "../Models/PostModels.js";

const createComment = async (req, res) => {
  const { post_id } = req.params;
  const { name, description, email } = req.body;
  try {
    const post = await Post.findById(post_id);
    if (post) {
      const comment = await Comment.create({
        postId: post_id,
        name: name,
        email: email,
        description: description,
      });

      if (comment) {
        res.status(201).json({ success: comment, postTitle: post.Title });
      } else {
        res.status(403).send("Comment Cannot be created");
      }
    } else {
      res.status(404).send("Post_id Not Found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCommentForaPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const comment = await Comment.find({ postId });
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(500).send("Comment not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { createComment, getCommentForaPost };
