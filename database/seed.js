const sampleData = require('./reviewsSampleData.js');
const { addListings } = require('./index.js');

addListings(sampleData.createListings(100));
