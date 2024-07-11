// Loader.js
import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-custom-black bg-opacity-90 flex justify-center items-center transition-opacity duration-2000 ease-in-out opacity-100 z-[1000]">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;