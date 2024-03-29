import Post from "../Models/PostModels.js";
// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "my-uploads");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

const createPost = async (req, res) => {
  const { Title, Author, Description, Category } = req.body;
  const fileName = req.file.filename;
  try {
    const post = await Post.create({
      Title,
      Author,
      Description,
      Category,
      Image: fileName,
    });
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

const getOnePaginatedPost = async (req, res) => {
  try {
    const post = await Post.find({});

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const lastIndex = page * limit;
    const result = post.slice(startIndex, lastIndex);

    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};

const getAllPaginatedPost = async (req, res) => {
  try {
    const post = await Post.find({});

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const lastIndex = page * limit;
    const result = post.slice(startIndex, lastIndex);

    const results = {};

    results.totalPost = post.length;
    results.pageCount = Math.ceil(post.length / limit);
    if (lastIndex < post.length) {
      results.next = {
        page: page + 1,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
      };
    }
    res.status(200).json({ results: results, result: result });
  } catch (e) {
    res.status(400).json(e);
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { Title, Author, Description, Category } = req.body;
  const fileName = req.file.filename;

  try {
    const post = await Post.findById(id);

    if (post) {
      const newPost = await Post.findOneAndUpdate(
        post._id,
        { Title, Author, Description, Category, Image: fileName },
        {
          new: true,
        }
      );
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
  getOnePaginatedPost,
  getAllPaginatedPost,
};
