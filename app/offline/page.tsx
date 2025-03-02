import React from 'react';

const OfflinePage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>You're Offline</h1>
            <p>Please check your internet connection and try again.</p>
        </div>
    );
};

export default OfflinePage;