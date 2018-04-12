const sampleData = require('./reviewsSampleData.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const listingSchema = mongoose.Schema({
    id: Number,
    reviews: [
        {
            name: String,
            profilePicture: String,
            date: {type: Date, default: Date.now()},
            body: String,
            stars: {
                overall: Number,
                accuracy: Number, 
                communication: Number, 
                cleanliness: Number,
                location: Number, 
                checkIn: Number, 
                value: Number
            }
        }
    ],
    numberOfReviews: Number,
});

const Listing = mongoose.model('Review', listingSchema);

const addListings = function(listings) {
    listings.forEach(function(listing, index) {
        let newListing = new Listing(listing);
        newListing.save(function(err, newListing) {
            if (err) return console.log(err);
        });
    });
};

const getListings = function(id, cb) {
    Listing.findOne({'id': id}, function(err, results) {
        if (err) {
            return handleError(err);
        } else {
            cb(results)
        }
    });
};

addListings(sampleData.createListings(100));

module.exports = {
    getListings
}