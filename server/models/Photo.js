const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    tripId: {
        type: Schema.Types.ObjectId,
        ref: 'trip',
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    img_url: {
        type: String,
        required: false,
    },
});

const Photo = mongoose.model('photo', photoSchema);

module.exports = Photo;