class LoginService {
    constructor() {
        this.users = [
            { username: 'testUser', password: 'testPass' },
            { username: 'admin', password: 'adminPass' },
            { username: 'emptyPassword', password: '' },
            { username: 'duplicateUser', password: 'pass1' },
            { username: 'duplicateUser', password: 'pass2' }
        ];
    }

    login(username, password) {
        console.log(`Login attempt: username=${username}, password=${password}`); 

        const user = this.users.find(user => user.username === username);
        if (!user) {
            console.log(`Login failed: User not found for username=${username}`); 
            return { success: false, message: 'User not found' };
        }

        if (user.password !== password) {
            console.log(`Login failed: Invalid password for username=${username}`);
            return { success: false, message: 'Invalid password' };
        }

        console.log(`Login successful: username=${username}`); 
        return { success: true, message: 'Login successful', statusCode: 201 };
    }
}

export default LoginService;