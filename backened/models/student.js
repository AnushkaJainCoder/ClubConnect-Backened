const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    email_id:{
        type: String,
        required: true
    },
    password: { 
        type: String, 
        required: true 
    },
    department:{
        type: String,
        required: true
    },
    currentYear:{
        type: Number,
        required: true
    },

    interests:{
        type: [String],
        required: false
    },
    

});

module.exports = mongoose.model('Student',userSchema);