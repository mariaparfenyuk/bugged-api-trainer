class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.usersService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users', error });
        }
    }

    async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await this.usersService.getUserById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user', error });
        }
    }

    async createUser(req, res) {
        const userData = req.body;
        try {
            const newUser = await this.usersService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: 'Error creating user', error });
        }
    }

    async updateUser(req, res) {
        const { id } = req.params;
        const userData = req.body;
        try {
            const updatedUser = await this.usersService.updateUser(id, userData);
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: 'Error updating user', error });
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const deletedUser = await this.usersService.deleteUser(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }
}

export default UsersController;