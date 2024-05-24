// better-reads/models/list.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  listName: { type: String, required: true },
  books: [{ 
    googleBooksId: String,
    title: String,
    authors: [String],
    publisher: String
  }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  is_default: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('List', listSchema);




