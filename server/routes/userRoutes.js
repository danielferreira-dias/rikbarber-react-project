const User = require('../Models/User.js'); // Assuming you have a User model
const passwordUtils = require('../utilities/PasswordUtility.js'); // Assuming you have utility functions for password handling
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();
const secretKey = process.env.SECRET_KEY;

// POST /users - Create a new user
router.post('/setuser', async (req, res) => {
    try {
        const { email, userType, password } = req.body;
        const hashedPassword = await passwordUtils.hashPassword(password); // Use as an object method

        const newUser = new User({
            email,
            userType,
            password: hashedPassword,
            // Add more fields as needed
        });

        await newUser.save();

        res.status(201).send('User created successfully');

    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Error creating user');
    }
});

// Assuming this is part of your login route handler
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Compare password
        const passwordMatch = await passwordUtils.comparePasswords(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Login successful
        console.log('Login successful');

        // Generate JWT token
        const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });

        // Send response with token
        return res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error.message);
        return res.status(500).json({ message: 'Login failed' });
    }
});

// GET /users - Get all Users
router.get('/users', async (req, res) => {
    try {
        const Users = await User.find();
        console.log(Users)
        // res.json(Users);
        res.status(200).send(Users)
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Error fetching users');
    }
});

// GET /checkEmail - Check if email exists
router.get('/checkEmail', async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ error: 'Email parameter missing' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (user) {
            return res.status(200).json({ exists: true, message: 'User already registered' });
        } else {
            return res.status(200).json({ exists: false, message: 'Email available' });
        }
    } catch (err) {
        console.error('Error checking email existence:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Add more routes as needed

module.exports = router;