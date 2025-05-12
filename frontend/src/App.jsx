import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import ApiTester from './pages/ApiTester';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Home />
                <ApiTester />
            </main>
        </div>
    );
};

export default App;