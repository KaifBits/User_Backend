// app.js
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./databaseconnection");
const route = require("./Routes/userlist");



const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Use routes
app.use(route);


const startServer = async () => {
  await connectDB(); // Connect to MongoDB
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
};

startServer();

