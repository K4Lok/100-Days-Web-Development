const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../data/database');
const { ObjectId } = require('bson');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('welcome', {csrfToken: req.csrfToken()});
});

router.get('/signup', async function (req, res) {
  var sessionUserInput = req.session.userInput;

  if(!sessionUserInput) {
    sessionUserInput = {
      hasError: false,
      email: '',
      confirmEmail: '',
      password: '',
    };
  }

  req.session.userInput = null;
  const csrfToken = req.csrfToken();

  res.render('signup', { inputData: sessionUserInput, csrfToken: csrfToken });
});

router.get('/login', function (req, res) {
  var sessionUserInput = req.session.userInput;

  if(!sessionUserInput) {
    sessionUserInput = {
      hasError: false,
      email: '',
      password: '',
    }
  }

  req.session.userInput = null;
  const csrfToken = req.csrfToken();

  res.render('login', {inputData: sessionUserInput, csrfToken: csrfToken});
});

router.post('/signup', async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredConfirmEmail = userData['confirm-email'];
  const enteredPassword = userData.password;

  if(
    !enteredEmail ||
    !enteredConfirmEmail ||
    !enteredPassword ||
    enteredPassword.trim() < 6 ||
    enteredEmail !== enteredConfirmEmail ||
    !enteredEmail.includes('@')
  ) {
    console.log('Please check if all the entered value are valid!');

    req.session.userInput = {
      hasError: true,
      message: 'Please check if all the entered value are valid!',
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword
    };

    req.session.save(function() {
      res.redirect('/signup');
    });

    return;
  }

  const existingUser = await db.getDb().collection('users').findOne({email: enteredEmail});
  if(existingUser) {
    console.log('User existed!');
    return res.redirect('/signup');
  }

  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  const user = {
    email: enteredEmail,
    password: hashedPassword
  };

  db.getDb().collection('users').insertOne(user);
  res.redirect('/login');
});

router.post('/login', async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const existingUser = await db.getDb().collection('users').findOne({email: enteredEmail});

  if(!existingUser) {
    console.log('User not exists!');

    req.session.userInput = {
      hasError: true,
      message: 'The user email is not exists!',
      email: enteredEmail,
      password: enteredPassword
    };

    req.session.save(function() {
      res.redirect('/login');
    });
    
    return
  }
  
  const passwordAreEqual = await bcrypt.compare(enteredPassword, existingUser.password);

  if(!passwordAreEqual) {
    console.log('Password is not Equal!');

    req.session.userInput = {
      hasError: true,
      message: 'Password not correct!',
      email: enteredEmail,
      password: enteredPassword
    };

    req.session.save(function() {
      res.redirect('/login');
    });
    
    return
  }

  req.session.user = { id: existingUser._id, email: existingUser.email };
  req.session.isAuthenticated = true;
  req.session.save(function() {
    res.redirect('/');
  });

});

router.get('/profile', function(req, res) {
  if(!req.session.isAuthenticated) {
    return res.status(401).render('401');
  }
  res.render('profile', {csrfToken: req.csrfToken()});
});

router.get('/admin', async function (req, res) {
  if(!req.session.isAuthenticated) {
    return res.status(401).render('401');
  }

  // const user = await db.getDb().collection('users').findOne({_id: new ObjectId(req.session.user.id)});
  const user = await db.getDb().collection('users').findOne({_id: req.session.user.id});

  if(!user || !user.isAdmin) {
    return res.status(403).render('403');
  }

  res.render('admin', {csrfToken: req.csrfToken()});
});

router.post('/logout', function (req, res) {
  if(req.session.user) {
    req.session.user = null,
    req.session.isAuthenticated = false
  }
  return res.redirect('/');
});

module.exports = router;
