const mongoose = require('mongoose');

// Use when running database locally
// mongoose.connect('mongodb://localhost/reviews');

// Use when running database in Docker
mongoose.connect('mongodb://database/reviews');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to Mongoose');
});

const listingSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  starsSummary: {
    overall: Number,
    accuracy: Number,
    cleanliness: Number,
    location: Number,
    checkIn: Number,
    value: Number,
    communication: Number,
  },
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

const addListings = (listings, cb) => {
  listings.forEach((listing) => {
    const newListing = new Listing(listing);
    newListing.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  });
  cb();
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

module.exports = {
  getListings,
  addListings,
};
