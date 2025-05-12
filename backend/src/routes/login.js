/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Allows a user to log in with a username and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *       400:
 *         description: Invalid credentials
 */

const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/loginController');

const loginController = new LoginController();

// Route for user login
router.post('/login', (req, res) => {
    loginController.login(req, res);
});

// Route for handling login errors (optional)
router.post('/login/error', (req, res) => {
    res.status(400).json({ message: 'Login error simulation' });
});

module.exports = router;