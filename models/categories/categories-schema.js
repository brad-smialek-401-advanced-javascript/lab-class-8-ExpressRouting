'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, uppercase: true, enum: [] },
});

module.exports = mongoose.model('categories ', categories);
