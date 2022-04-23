const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  tripId: {
    type: Schema.Types.ObjectId,
    ref: 'trip'
  },
  day: {
    type: Number
  },
  index: {
    type: Number
  },
  category: {
    type: Number
  },
  subcategory: {
    type: Number
  },
  time: {
    type: Date,
    default: Date.now
  },
  header: {
    type: String
  },
  text: {
    type: String
  }
});

const Plan = mongoose.model('plan', planSchema);

module.exports = Plan;
