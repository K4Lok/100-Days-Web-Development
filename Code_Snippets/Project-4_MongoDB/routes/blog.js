const express = require('express');
const { route } = require('../../Project-4_MySQL/routes/blog');

const mongodb = require('mongodb');
const db = require('../data/database');
const ObjectID = mongodb.ObjectId;

const router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/posts');
});

router.get('/posts', async function(req, res) {
  const posts = await db.getDB().collection('posts').find({}, {title: 1, summary: 1, 'author.name': 1}).toArray();
  res.render('posts-list', {posts: posts});
});

router.get('/new-post', async function(req, res) {
  const authors = await db.getDB().collection('authors').find().toArray();
  console.log(authors);
  res.render('create-post', {authors: authors});
});

router.post('/new-post', async function(req, res) {
  const authorID = new ObjectID(req.body.author);
  const author = await db.getDB().collection('authors').findOne({_id: authorID});

  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: new ObjectID(req.body.author),
      name: author.name,
      email: author.email
    }
  }

  const result = await db.getDB().collection('posts').insertOne(newPost);
  console.log(result);

  res.redirect('/posts');
});

router.get('/posts/:id', async function(req, res) {
  const postId = req.params.id;
  try {
    const post = await db.getDB().collection('posts').findOne({_id: new ObjectID(postId)});
    post.humanReadableDate = post.date.toLocaleDateString('en-US', {
      day: 'numeric',
      year: 'numeric',
      month: 'long',
      weekday: 'long'
    });
    post.date = post.date.toISOString();

    return res.render('post-detail', {post: post});
  }
  catch(error) {
    console.log(error);
    return res.status(404).render('404');
  }
});

router.get('/posts/:id/edit', async function(req, res) {
  try {
    const post = await db.getDB().collection('posts').findOne({_id: new ObjectID(req.params.id)});
    res.render('update-post', {post: post});
  }
  catch(error) {
    console.log(error);
    return res.status(404).render('404');
  }

});

router.post('/posts/:id/edit', async function(req, res) {
  const postId = new ObjectID(req.params.id);
  const post = req.body;
  const result = await db.getDB().collection('posts').updateOne({_id: postId}, 
    {$set: {
      title: post.title,
      summary: post.summary,
      body: post.body
  }});

  return res.redirect('/posts');
});

router.post('/posts/:id/delete', async function(req, res) {
  const postId = new ObjectID(req.params.id);
  try {
    const result = db.getDB().collection('posts').deleteOne({_id: postId});
    return res.redirect('/posts');
  }
  catch(error) {
    return res.status(404).render('404');
  }
});

router.get('/posts/:id/comments', async function(req, res) {
  const postId = new ObjectID(req.params.id);
  const comments = await db.getDB().collection('comments').find({postId: postId}).toArray();

  res.json(comments);
});

router.post('/posts/:id/comments', async function(req, res) {
  const postId = new ObjectID(req.params.id);
  const newComment = {
    postId: postId,
    title: req.body.title,
    text: req.body.text
  };
  
  await db.getDB().collection('comments').insertOne(newComment);
  res.json({message: 'Comment added!'});
});

module.exports = router;