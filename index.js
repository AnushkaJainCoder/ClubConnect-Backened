const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const studentRoutes = require('./backened/routes/studentRoute'); // Ensure the correct path
const clubRoutes = require('./backened/routes/clubRoute');
app.use('/api/students', studentRoutes);
app.use('/api/clubs', clubRoutes);



module.exports = app;
