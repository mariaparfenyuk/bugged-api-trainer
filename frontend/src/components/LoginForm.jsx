import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [requestDetails, setRequestDetails] = useState(null);
    const [responseDetails, setResponseDetails] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestPayload = { username, password };
        const requestUrl = 'http://localhost:3000/login';

        try {
            setRequestDetails({
                method: 'POST',
                url: requestUrl,
                body: requestPayload,
            });

            const res = await axios.post(requestUrl, requestPayload);

            setResponseDetails({
                status: res.status,
                data: res.data,
            });
        } catch (error) {
            setResponseDetails({
                status: error.response ? error.response.status : 'Network Error',
                data: error.response ? error.response.data : { message: 'An error occurred' },
            });
        }
    };

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {/* Форма для ввода данных */}
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>

            {/* Отображение запроса и ответа */}
            <div>
                <h3>Request</h3>
                {requestDetails ? (
                    <pre>{JSON.stringify(requestDetails, null, 2)}</pre>
                ) : (
                    <p>No request sent yet.</p>
                )}

                <h3>Response</h3>
                {responseDetails ? (
                    <pre>{JSON.stringify(responseDetails, null, 2)}</pre>
                ) : (
                    <p>No response received yet.</p>
                )}
            </div>
        </div>
    );
};

export default LoginForm;