import { config } from 'dotenv';
import app from './app.js';
import cloudinary from 'cloudinary';
import { dbConnection } from './database/dbConnection.js';

// Load environment variables from config/config.env file
config({ path: './config/config.env' });

// Debugging: Check if environment variables are loaded correctly
console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY);
console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET);
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log("Expires",process.env.JWT_EXPIRES);
console.log("Cookie expires in",process.env.COOKIE_EXPIRES);
console.log("JWTT KEY",process.env.JWT_SECRET_KEY);
// Connect to MongoDB
dbConnection();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 3000; // Use a default port if PORT is not defined

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
