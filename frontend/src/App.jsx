import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
    const [page, setPage] = useState('home'); // 'home' | 'login' | 'register'

    return (
        <div>
            <h1>Bugged API Trainer</h1>
            {page === 'home' && (
                <div>
                    <button onClick={() => setPage('login')}>Логин</button>
                    <button onClick={() => setPage('register')}>Регистрация</button>
                </div>
            )}
            {page === 'login' && (
                <LoginForm onBack={() => setPage('home')} />
            )}
            {page === 'register' && (
                <RegisterForm onBack={() => setPage('home')} />
            )}
        </div>
    );
};

export default App;