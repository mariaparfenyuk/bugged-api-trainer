const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usersController');
const usersController = new UsersController();

// Get all users
router.get('/', (req, res) => {
    // Intentionally buggy response
    res.status(200).json({ users: null }); // Simulating a missing users array
});

// Get user by ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    // Intentionally buggy response
    if (userId !== '1') {
        res.status(404).json({ message: 'User not found' }); // Simulating a valid user not found
    } else {
        res.status(200).json({ id: userId, name: 'John Doe' });
    }
});

// Create a new user
router.post('/', (req, res) => {
    const newUser = req.body;
    // Intentionally buggy response
    if (!newUser.name) {
        res.status(400).json({ message: 'Name is required' }); // Simulating a missing field
    } else {
        res.status(201).json({ id: 1, ...newUser });
    }
});

// Update user by ID
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    // Intentionally buggy response
    if (userId !== '1') {
        res.status(404).json({ message: 'User not found' }); // Simulating a valid user not found
    } else {
        res.status(200).json({ id: userId, ...updatedUser });
    }
});

// Delete user by ID
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    // Intentionally buggy response
    if (userId !== '1') {
        res.status(404).json({ message: 'User not found' }); // Simulating a valid user not found
    } else {
        res.status(204).send(); // No content response
    }
});

module.exports = router;