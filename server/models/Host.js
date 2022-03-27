const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    tripId: {
        type: Schema.Types.ObjectId,
        ref: 'trip',
    }
});

const Host = mongoose.model('host', hostSchema);

module.exports = Host;