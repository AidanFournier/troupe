const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  tripId: {
    type: Schema.Types.ObjectId,
    ref: 'trip'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  category: {
    type: Number,
    required: false
  },
  amount: {
    type: Number,
    required: true
  }
});

const Budget = mongoose.model('budget', budgetSchema);

module.exports = Budget;
