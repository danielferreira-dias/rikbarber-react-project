// models/User.js
import mongoose from 'mongoose';

// Define a Mongoose schema for User
const productSchema = new mongoose.Schema({
    img: String,
    name: String,
    desc: String,
    price: String,
    // Add more fields as needed
});

// Create a User model based on the schema
const Product = mongoose.model('Product', productSchema);

export default Product;