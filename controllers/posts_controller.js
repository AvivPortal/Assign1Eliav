const PostModel = require("../models/posts_model");

const getAllPosts = async (req, res) => {
  const filter = req.query.owner;
  try {
    if (filter) {
      const posts = await PostModel.find({ owner: filter });
      res.send(posts);
    } else {
      const posts = await PostModel.find();
      res.send(posts);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await PostModel.findById(postId);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send("No result");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createPost = async (req, res) => {
    const postBody = req.body;
    try {
      const post = await PostModel.create(postBody);
      res.status(201).send(post);
    } catch (error) {
      console.error("Failed to create post:", error); // Log the error
      res.status(400).send(error.message);
    }
  };
const updatePost = async (req, res) => {
    const postId = req.params.id;
    const postBody = req.body;
    try {
        const post = await PostModel.findByIdAndUpdate(postId, postBody, { new: true, runValidators: true });
        if (post) {
            res.send(post);
        } else {
            res.status(404).send("No result");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// const deletePost = (req, res) => {
//   console.log("delete a post");
//   res.send("delete a post");
// };

module.exports = {
  getAllPosts,
  createPost,
  //deletePost,
  updatePost,
  getPostById,
};