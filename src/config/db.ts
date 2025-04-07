import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined');
    }

    // Mongoose v6+ no longer requires these options
    await mongoose.connect(mongoURI);

    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
