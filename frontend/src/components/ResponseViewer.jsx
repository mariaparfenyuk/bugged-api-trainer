import React from 'react';

const ResponseViewer = ({ response }) => {
    return (
        <div className="response-viewer">
            <h2>API Response</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
    );
};

export default ResponseViewer;