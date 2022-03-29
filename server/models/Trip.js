const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate:{
        type: Date,
    },
});

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip;