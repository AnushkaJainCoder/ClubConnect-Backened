const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
    },
    details: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Event', eventSchema);