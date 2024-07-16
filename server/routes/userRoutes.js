import { Router } from 'express';
import dotenv from 'dotenv';
import User from '../Models/User.js'; // Assuming you have a User model
import Product from '../Models/Product.js';
import * as passwordUtils from '../utilities/PasswordUtility.js'; // Assuming you have utility functions for password handling
import jwt from 'jsonwebtoken';

dotenv.config();
const secretKey = process.env.SECRET_KEY;

const router = Router();

// POST /users - Create a new user
router.post('/setuser', async (req, res) => {
    try {
        const { email, userType, password } = req.body;
        const hashedPassword = await passwordUtils.hashPassword(password);

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

// POST /users/login - User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const passwordMatch = await passwordUtils.comparePasswords(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });

        return res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error.message);
        return res.status(500).json({ message: 'Login failed' });
    }
});

// GET /users - Get all Users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Error fetching users');
    }
});

// GET /users/checkEmail - Check if email exists
router.get('/checkEmail', async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ error: 'Email parameter missing' });
        }

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


let storeItems = [];

// Function to update storeItems
const updateStoreItems = async () => {
    try {
        const products = await Product.find();
        storeItems = products.map(product => ({
            img: product.img,
            name: product.name,
            desc: product.desc,
            price: product.price
        }));
    } catch (err) {
        console.error('Error updating storeItems:', err);
    }
};

// Update storeItems at startup
updateStoreItems();

// POST /setProduct - Create a new Product
router.post('/setProduct', async (req, res) => {
    try {
        const { img, name, desc, price } = req.body;

        const newProduct = new Product({
            img,
            name,
            desc,
            price
        });

        await newProduct.save();

        // Update storeItems after saving new product
        await updateStoreItems();

        res.status(201).send('Product created successfully');
    } catch (err) {
        console.error('Error creating Product:', err);
        res.status(500).send('Error creating Product');
    }
});

// GET /products - Get all Products
router.get('/products', async (req, res) => {
    try {
        // You can return products directly from the database
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.error('Error fetching Products:', err);
        res.status(500).send('Error fetching Products');
    }
});

// Example route to get storeItems
router.get('/storeItems', (req, res) => {
    res.status(200).json(storeItems);
});

export default router;