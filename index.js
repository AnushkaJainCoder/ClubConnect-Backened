const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    userNewUrlParser: true,
    userUnifiedTopology: true

})
.then(() => console.log("connected"))
.catch(err => console.log(err));

