const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    tripId: {
        type: Schema.Types.ObjectId,
        ref: 'trip',
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    email: {
        type: String,
        require: false,
    },
});

const Member = mongoose.model('member', memberSchema);

module.exports = Member;