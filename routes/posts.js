const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get back all the posts
router.get('/', async (req,res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  } catch(err) {
    res.json({message: err});
  }
});

// Submits a post
router.post('/', async (req,res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try{
    const savePost = await post.save();
    res.json(savePost);
  } catch(err) {
    res.json({message: err});
  }
});

// Get a specific post
router.get('/:id', async (req,res) => {
  try{
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch(err) {
    res.json({message: err});
  }
});

// Delete a post
router.delete('/:id', async (req,res) => {
  try{
    const removedPost = await Post.remove({_id: req.params.id});
    res.json(removedPost);
  } catch(err){
    res.json({message: err});
  }
});

// Update a post
router.patch('/:id', async (req,res) => {
  try{
    const updatePost = await Post.updateOne(
      {_id: req.params.id},
      {$set: {title: req.body.title}}
    );
    
    res.json(updatePost);

  } catch(err){
    res.json({message: err});
  }
});

module.exports = router;