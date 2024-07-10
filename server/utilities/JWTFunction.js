import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

// utils.js
export function checkToken(setUserIsLogged) {
    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp && decodedToken.exp < currentTime) {
                    // Token has expired
                    localStorage.removeItem('token');
                    setUserIsLogged(false);
                } else {
                    // Token is valid
                    setUserIsLogged(true);
                }
            } catch (error) {
                // Token is invalid or decoding failed
                console.error('Token decoding failed:', error);
                localStorage.removeItem('token');
                setUserIsLogged(false);
            }
        } else {
            setUserIsLogged(false);
        }
    }, []);
}

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}