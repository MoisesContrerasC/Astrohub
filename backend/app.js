const express = require("express");
const app = express();



const userRoutes = require('./routes/userRoute'); // Import the user routes

app.use('/api/login', userRoutes); // Use the user routes
module.exports = app;
