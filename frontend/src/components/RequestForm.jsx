import React, { useState } from 'react';

const RequestForm = ({ onSubmit }) => {
    const [endpoint, setEndpoint] = useState('');
    const [method, setMethod] = useState('GET');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ endpoint, method, body });
        setEndpoint('');
        setMethod('GET');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="endpoint">API Endpoint:</label>
                <input
                    type="text"
                    id="endpoint"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="method">Method:</label>
                <select
                    id="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div>
                <label htmlFor="body">Request Body:</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button type="submit">Send Request</button>
        </form>
    );
};

export default RequestForm;