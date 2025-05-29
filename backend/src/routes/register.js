import express from 'express';
import UserService from '../services/userService.js';

const router = express.Router();
const userService = new UserService();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
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
 *         description: Registration successful
 *       400:
 *         description: Registration error
 */
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const result = userService.register(username, password);
    res.status(result.success ? 200 : 400).json(result);
});

export default router;