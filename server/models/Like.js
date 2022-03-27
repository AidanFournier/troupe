const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    ideaId: {
        type: Schema.Types.ObjectId,
        ref: 'idea',
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
});

const Like = mongoose.model('like', memberSchema);

module.exports = Like;