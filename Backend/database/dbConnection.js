import mongoose from 'mongoose';
import { config } from 'dotenv';

// Load environment variables from config/config.env file
config({ path: './config/config.env' });

// Debugging: Check if MONGODB_URI is loaded correctly
console.log('MONGODB_URI:', process.env.MONGODB_URI);

export const dbConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    // Connect to MongoDB without deprecated option
    await mongoose.connect(uri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error(`Some error occurred while connecting to the database: ${error.message}`);
  }
};
