const fs = require('fs');
const express = require('express');

const getAllPosts = () => {
    let read = fs.readFileSync('./models/posts.json', 'utf8');
    let posts = JSON.parse(read);
    return posts;
}


const createPost = (post) => {
    let posts = getAllPosts();
    posts.push(post);
    console.log(posts);
    fs.writeFileSync('./models/posts.json', JSON.stringify(posts))
    //return posts;
}

const updatePost = (title, updateValue) => {
    let posts = getAllPosts();
    let index = posts.findIndex(post => post.title === title)
    if(index === -1) {
        return "it doesn't exist"
    }
    posts[index].author = updateValue
    console.log(posts[index])
    
    // console.log(posts);
    fs.writeFileSync('./models/posts.json', JSON.stringify(posts))

    return posts
}


const postToDelete = (title) => {
    posts = getAllPosts;
    let postToUpdate = posts.find((x) => x.title === title);
    const index = posts.indexOf(postToUpdate);
    posts.splice(index, 1);
    fs.writeFileSync('./models/posts.json', JSON.stringify(posts));
    return posts;
  };


module.exports = {getAllPosts , createPost, updatePost, postToDelete}