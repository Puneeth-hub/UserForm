import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';  
import itemRoutes from './routes/itemRoute.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
// app.use(cors());
app.use(cors({
    origin: 'https://userform-frontend.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const port = process.env.PORT || 5000;

// Test route to check if the server is working
app.get("/test", (req, res) => {
    console.log('Request received');
    res.send('Test route working');
});

// Use item routes for API
app.use("/api", itemRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err)); 
