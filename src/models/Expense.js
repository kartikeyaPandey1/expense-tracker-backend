const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  title: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  paymentMethod: {
    type: String
  },

  note: {
    type: String
  },

  type: {
    type: String,
    enum: ['expense', 'income'],
    default: 'expense'
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Expense', expenseSchema);