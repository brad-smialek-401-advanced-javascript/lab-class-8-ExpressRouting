'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false, uppercase: false, enum: [] },
});

module.exports = mongoose.model('products ', products);