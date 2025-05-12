class LoginController {
    async login(req, res) {
        const { username, password } = req.body;

        // Simulate a buggy response for demonstration purposes
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required." });
        }

        // Simulate a successful login with a hidden bug (e.g., incorrect status code)
        if (username === "user" && password === "pass") {
            return res.status(200).json({ message: "Login successful!" });
        }

        // Simulate an incorrect status code for invalid credentials
        return res.status(500).json({ error: "Invalid credentials." });
    }
}

export default new LoginController();