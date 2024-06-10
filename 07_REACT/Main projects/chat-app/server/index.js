require('dotenv').config(); // Load environment variables from .env

const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const db = require('./DB/Connection'); // Ensure your database connection is established here
const router = require('./Routes/router');
const messageRoute = require('./Routes/messageRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser());

// Routes
app.use(router);
app.use(messageRoute);

// Default route
app.get('/', (req, res) => {
  res.send("Welcome to chat-app");
});

// Port creation
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
