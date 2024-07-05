import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);


async function run() {
    try {
        await client.connect(); // Connect to MongoDB

        const database = client.db('BarberDataBase');
        const usersCollection = database.collection('Users');

        const query = { name: 'Daniel Dias' };
        const user = await usersCollection.findOne(query);

        console.log(user);
    } finally {
        console.log(process.env.MONGODB_URI); // Log MONGODB_URI here as well
        await client.close(); // Close MongoDB client
    }
}

run().catch(console.dir);