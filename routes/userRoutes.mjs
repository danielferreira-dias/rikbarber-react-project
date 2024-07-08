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