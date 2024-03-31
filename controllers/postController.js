const { getAllPosts, createPost, updatePost, postToDelete} = require('../models/post.js');

const getPost = (req,res) => {
    let post = getAllPosts();
    res.send(post);
}

const addPost = (req,res) => {
    let newpost = req.body;
    // console.log(newpost);
    let post = createPost(newpost)
    res.status(201).send(post);
}

const assignPost = (req, res) => {
    const posts = getAllPosts();
    const postTitle = req.params.title;
    const auth = req.body.author;
    let output = updatePost(postTitle,auth)
    res.send(output);
}

const deletePost = (req, res) => {
    let title = req.params.name;
    let post = postToDelete(title,pathPosts);
    res.status(201).send(post);
  };


module.exports = {
    getPost,
    addPost,
    assignPost,
    deletePost
}