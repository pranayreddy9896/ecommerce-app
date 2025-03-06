import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const connectDB = async () => {
 
 
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(" MongoDB Connected Successfully!");
 
};

export default connectDB;
