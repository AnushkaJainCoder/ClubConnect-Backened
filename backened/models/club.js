const mongoose = require('mongoose');
const event = require('./event')

const clubSchema = new mongoose.Schema({
    clubName: {
        type: String,
        require: true
    },
    email_id: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    members: {
        type: Number,
        required: true
    },
    details:{
        type: String,
        required: true
    }, 
    events: {
        type: [event],
        required: false
    }

    


});

module.exports = mongoose.model('Club', clubSchema);
