import Post from "../Models/PostModels.js";

const createPost = async (req, res) => {
  const { Title, Author, Description, Category } = req.body;

  try {
    const post = await Post.create({ ...req.body });
    if (post) {
      res.status(201).json({ success: post });
    } else {
      res.status(403).send("Could not create a New Post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const sportsCatrgories = async (req, res) => {
  const { Category } = req.params;
  try {
    const categories = await Post.find({ Category: "News" });
    if (categories) {
      res.status(200).json(categories);
    } else {
      res.status(500).send("categories not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getApost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    if (post) {
      return res.status(200).json(post);
    } else {
      res.status(404).json({ msg: "Could not find the id" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllPost = async (req, res) => {
  try {
    const post = await Post.find({});

    if (post) {
      return res.status(200).json(post);
    } else {
      res.status(404).json({ msg: "Post have not been Created by the Admin" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { Title, Author, Description, Category } = req.body;

  try {
    const post = await Post.findById(id);

    if (post) {
      const newPost = await Post.findOneAndUpdate(post._id, req.body, {
        new: true,
      });
      if (newPost) {
        res.status(201).json(newPost);
      } else {
        res.status(404).json({ msg: "Post Could not be Updated" });
      }
    } else {
      res.status(404).json({ msg: "Post id cannot be found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post_id = await Post.findByIdAndDelete(id);
    if (post_id) {
      res.status(200).json({ post_id, msg: "Post Deleted Successfully" });
    } else {
      res.status(404).send("Could not Delete This Post");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  createPost,
  getApost,
  getAllPost,
  sportsCatrgories,
  updatePost,
  deletPost,
};
