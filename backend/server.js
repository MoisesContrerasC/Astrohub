// // Import Mongoose
// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();
// app.use(express.json());
// // Replace <your_connection_string> with your MongoDB connection string
// const connectionString = 'mongodb+srv://anandsksharma:1oEoAyp2N2WlCfVn@cluster0.pmqa9af.mongodb.net/?retryWrites=true&w=majority';

// // Connect to MongoDB
// mongoose.connect(connectionString);

// // Get the default connection
// const db = mongoose.connection;
// const userRoutes=require('./routes/userRoute');
// // Event handlers for connection events
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
// app.use('/LoginPage', userRoutes);

// // Export the mongoose connection
// module.exports = mongoose;
const app = require("./app");

const connectDatabase = require("./config/database");

// Connecting to database
connectDatabase();


const server = app.listen(8000, () => {
  console.log(`Server is working on http://localhost:8000`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

