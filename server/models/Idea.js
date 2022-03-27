const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    tripId: {
        type: Schema.Types.ObjectId,
        ref: 'trip',
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    category: {
        type: Number,
    },
    comment: {
        type: String,
        required: false,
    },
});

const Idea = mongoose.model('idea', ideaSchema);

module.exports = Idea;