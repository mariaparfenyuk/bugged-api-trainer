import { expect } from 'chai';
import LoginService from '../src/services/loginService.js';

describe('LoginService', () => {
    let loginService;

    beforeEach(() => {
        loginService = new LoginService();
    });

    it('should return success for valid credentials', () => {
        const result = loginService.login('testUser', 'testPass');
        expect(result).to.deep.equal({
            success: true,
            message: 'Login successful',
            statusCode: 201
        });
    });

    it('should return error for invalid password', () => {
        const result = loginService.login('testUser', 'wrongPass');
        expect(result).to.deep.equal({
            success: false,
            message: 'Invalid password'
        });
    });

    it('should return error for non-existent user', () => {
        const result = loginService.login('unknownUser', 'anyPass');
        expect(result).to.deep.equal({
            success: false,
            message: 'User not found'
        });
    });

    it('should handle empty username or password', () => {
        const result1 = loginService.login('', 'testPass');
        const result2 = loginService.login('testUser', '');
        expect(result1).to.deep.equal({
            success: false,
            message: 'User not found'
        });
        expect(result2).to.deep.equal({
            success: false,
            message: 'Invalid password'
        });
    });

    it('should handle duplicate usernames correctly', () => {
        const result = loginService.login('duplicateUser', 'pass1');
        expect(result).to.deep.equal({
            success: true,
            message: 'Login successful',
            statusCode: 201
        });
    });
});