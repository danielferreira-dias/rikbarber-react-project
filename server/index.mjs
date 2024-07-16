import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

// Set up your CORS options
const allowedOrigins = ["http://localhost:5050", "http://localhost:3050", "http://localhost:5173", "https://rikbarber-react-project.vercel.app"];

const corsOptions = {
    origin: '*',
    credentials: true, // if needed
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    dbName: "BarberDataBase"
})
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.error("Could not connect to database", err);
    });



// Use user routes middleware
app.use('/api', userRoutes);

// listen for requests
const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Define a route for '/'
app.get('/', (req, res) => {
    res.send('Hello Planet!');
});


