import React from 'react';
import Header from '../components/Header';
import RequestForm from '../components/RequestForm';
import ResponseViewer from '../components/ResponseViewer';

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to Bugged API Trainer 🐞</h1>
            <p>Practice your API testing skills by interacting with intentionally buggy endpoints.</p>
            <RequestForm />
            <ResponseViewer />
        </div>
    );
};

export default Home;