const sampleData = require('./reviewsSampleData.js');
const { addListings } = require('./index.js');
const mongoose = require('mongoose');

console.log('The seed file is running');
addListings(sampleData.createListings(100), () => mongoose.connection.close);
