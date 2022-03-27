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
        validate: function(input){
            return typeof new Date(input) === 'date' && new Date(input) >= new Date();
        },
        message: input => `${input} must be greater than or equal to the current date!`
    },
    endDate:{
        type: Date,
        validate: function(input){
            return typeof new Date(input) === 'date' && new Date(input) >= new Date();
        },
        message: input => `${input} must be greater than or equal to the current date!`
    },
});

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip;