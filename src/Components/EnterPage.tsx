import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const EnterPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative bg-custom-black">
            <video className="absolute inset-0 object-cover w-full h-full grayscale" autoPlay muted loop>
                <source src="barber-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {showLogin ? (
                <Login toggleForm={() => setShowLogin(false)} />
            ) : (
                <Register toggleForm={() => setShowLogin(true)} />
            )}
        </div>
    );
};

export default EnterPage;