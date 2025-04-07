import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import fontRoutes from './routes/fontRoutes';
import fontGroupRoutes from './routes/fontGroupRoutes';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/fonts', fontRoutes);
app.use('/api/font-groups', fontGroupRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
