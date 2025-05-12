import React, { useState } from 'react';
import RequestForm from '../components/RequestForm';
import ResponseViewer from '../components/ResponseViewer';

const ApiTester = () => {
    const [response, setResponse] = useState(null);

    const handleResponse = (apiResponse) => {
        setResponse(apiResponse);
    };

    return (
        <div>
            <h1>API Tester</h1>
            <RequestForm onResponse={handleResponse} />
            <ResponseViewer response={response} />
        </div>
    );
};

export default ApiTester;