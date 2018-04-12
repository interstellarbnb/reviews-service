const sampleData = require('./reviewsSampleData.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Reservations');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const reviewSchema = mongoose.Schema({
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

const Review = mongoose.model('Reservation', reviewSchema);

const addReviews = function(reviews) {
    reviews.forEach(function(review, index) {
        let newReview = new Review(review);
        newReview.save(function(err, newReview) {
            if (err) return console.log(err);
        })
    })
}

addReviews(sampleData.createListings(100));