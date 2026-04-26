const Post = require('../models/postModel');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving post', error });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.createPost(title, content);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.updatePost(req.params.id, title, content);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.deletePost(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully', post });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };