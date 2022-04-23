const Trip = require('../models/Trip');
const User = require('../models/User');

// Create a Trip
const createTrip = async (req, res) => {
    const { name, location, startDate, endDate } = req.body;
    const newTrip = Trip.new({ name, location, startDate, endDate });
    console.log(newTrip);
    
    // Still need to implement validations

    try {
        await newTrip.save();
        res.status(200).json({ message: 'Trip created' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Find a Trip by Id
const getTrip = (req, res) => {
    const { id } = req.params.id;
    Trip.findById({ id }), (err, trip) =>{
        if(err){
            res.status(400).json('Cannot find trip');
        }
        res.status(200).json(trip);
    };
};

// Update a Trip
const updateTrip = (req, res) => {
    Trip.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, todo) => {
            if (err){
                res.status(500).json(err);
            }
            res.status(200).json(todo);
        }
    );
};

// Delete Trip
const deleteTrip = async (req, res) => {
    await Trip.findByIdAndDelete({ _id: req.params.id }), (err) => {
        if (err) {
            return res.status(400).json('Error. Not able to delete trip');
        }
        res.status(200).json({ message: 'Trip deleted successfully' });
    };
};

module.exports = { createTrip, getTrip, updateTrip, deleteTrip };