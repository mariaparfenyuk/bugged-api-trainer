class UsersService {
    constructor() {
        this.users = []; // This will hold the user data
    }

    // Method to create a new user
    createUser(userData) {
        const newUser = {
            id: this.users.length + 1,
            ...userData,
        };
        this.users.push(newUser);
        return newUser;
    }

    // Method to get all users
    getAllUsers() {
        return this.users;
    }

    // Method to get a user by ID
    getUserById(userId) {
        return this.users.find(user => user.id === userId);
    }

    // Method to update a user by ID
    updateUser(userId, updatedData) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return null; // User not found
        }
        this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
        return this.users[userIndex];
    }

    // Method to delete a user by ID
    deleteUser(userId) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return null; // User not found
        }
        const deletedUser = this.users.splice(userIndex, 1);
        return deletedUser[0];
    }
}

export default UsersService;