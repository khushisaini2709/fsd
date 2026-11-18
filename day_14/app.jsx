import React from 'react';
import Login from './login';
const app = () => {
    const userName="khushi";
    const email="khushi@example.com";
    password="password123";
    return (
        <div>   
            <Login user={{ userName, email, password }} />
        </div>
    );
}
        
