const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const TransacionSchema = new Schema({
  TransactionId: {
    type: Number,
    required: true
  },
  CardNumber: {
    type: Number,
    required: true
  },
  TxnAmount: {
    type: Number,
    required: true
  },
  TxnResponse: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  recivedTime: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Transaction = mongoose.model('Transaction', TransacionSchema);