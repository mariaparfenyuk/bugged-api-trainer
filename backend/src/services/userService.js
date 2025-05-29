export default class UserService {
    constructor() {
        this.users = [
            { username: 'testUser', password: 'testPass' },
            { username: 'admin', password: 'adminPass' }
        ];
    }

    register(username, password) {
        if (!username || !password) {
            return { success: false, message: 'Username and password are required' };
        }
        const exists = this.users.some(user => user.username === username);
        if (exists) {
            return { success: false, message: 'User already exists' };
        }
        const newUser = { username, password };
        this.users.push(newUser);
        return { success: true, message: 'Registration successful' };
    }
}