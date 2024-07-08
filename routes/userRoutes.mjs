import express from 'express';
import User from './Models/User.js';
import passwordUtils from '../utilities/PasswordUtility.js'; // Import as an object

const router = express.Router();

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

// POST /login - Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('User not found');
        }

        // Compare password
        const passwordMatch = await passwordUtils.comparePasswords(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (passwordMatch) {
            console.log('Login successful');
            res.status(200).send('Login successful');
            // Proceed with login logic (e.g., create session, generate token, etc.)
        } else {
            throw new Error('Incorrect password');
        }
    } catch (error) {
        console.error('Login error:', error.message);
        res.status(401).send('Login failed');
        // Handle login failure (e.g., show error message to user)
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

// Add more routes as needed

export default router;