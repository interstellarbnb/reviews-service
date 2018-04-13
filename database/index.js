const mongoose = require('mongoose');
const sampleData = require('./reviewsSampleData.js');

mongoose.connect('mongodb://localhost/reviews');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to Mongoose');
});

const listingSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  reviews: [
    {
      name: String,
      profilePicture: String,
      date: { type: Date, default: Date.now() },
      body: String,
      stars: {
        overall: Number,
        accuracy: Number,
        communication: Number,
        cleanliness: Number,
        location: Number,
        checkIn: Number,
        value: Number,
      },
    },
  ],
  numberOfReviews: Number,
});

const Listing = mongoose.model('Review', listingSchema);

const addListings = (listings) => {
  listings.forEach((listing) => {
    const newListing = new Listing(listing);
    newListing.save((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`The listing ${data} has been saved`);
      }
    });
  });
};

const getListings = (id, cb) => {
  Listing.findOne({ id }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      cb(results);
    }
  });
};

addListings(sampleData.createListings(100));

module.exports = {
  getListings,
};
