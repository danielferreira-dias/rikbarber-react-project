// models/User.js
import mongoose from 'mongoose';

// Define a Mongoose schema for User
const userSchema = new mongoose.Schema({
    email: String,
    userType: Number,
    password: String,
    // Add more fields as needed
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;