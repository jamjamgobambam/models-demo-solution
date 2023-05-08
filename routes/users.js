const express = require('express');
const router = express.Router();

// Import the userModel
const userModel = require('../models/users'); 

// GET /users - get all users
router.get('/users', (req, res) => {
  const users = userModel.getAll();
  res.json(users);
});

// GET /users/:id - get a specific user by ID
router.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = userModel.getById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: `User with ID ${id} not found` });
  }
});

// POST /users - create a new user
router.post('/users', (req, res) => {
  const user = req.body;
  const newUser = userModel.create(user);
  res.status(201).json(newUser);
});

// PUT /users/:id - update an existing user by ID
router.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = req.body;
  const updatedUser = userModel.update(id, user);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: `User with ID ${id} not found` });
  }
});

// DELETE /users/:id - delete a user by ID
router.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedUser = userModel.delete(id);
  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: `User with ID ${id} not found` });
  }
});

module.exports = router;