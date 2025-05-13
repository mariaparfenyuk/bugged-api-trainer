import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import LoginService from './services/loginService.js';
import setupSwagger from './swagger.js';

const app = express();
app.use(cors());
const loginService = new LoginService();

app.use(bodyParser.json());

setupSwagger(app);

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    const result = loginService.login(username, password);
    res.status(result.success ? 200 : 400).json(result);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});