const express = require('express');
const env = require('dotenv').config();
const connectDB = require('./config/db');
const app = express();
connectDB();


app.listen(process.env.PORT,()=> {
  console.log(`server running at http://localhost:${process.env.PORT}`);
})

module.exports = app;