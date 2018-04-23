const { name, image, lorem } = require('faker');

const createListings = (numberOfEntries, startingId = 1) => {
  const listings = [];
  for (let i = startingId; i < numberOfEntries + startingId; i += 1) {
    const numberOfReviews = Math.ceil(Math.random() * 20);
    const listing = {
      id: i,
      numberOfReviews,
      starsSummary: {
        overall: Math.ceil(Math.random() * 5),
        accuracy: Math.ceil(Math.random() * 5),
        cleanliness: Math.ceil(Math.random() * 5),
        location: Math.ceil(Math.random() * 5),
        checkIn: Math.ceil(Math.random() * 5),
        value: Math.ceil(Math.random() * 5),
        communication: Math.ceil(Math.random() * 5),
      },
    };
    const listingReviews = [];
    for (let j = 0; j < numberOfReviews; j += 1) {
      const review = {
        name: name.findName(),
        profilePicture: image.avatar(),
        body: lorem.sentences(),
        stars: {
          overall: Math.ceil(Math.random() * 5),
          accuracy: Math.ceil(Math.random() * 5),
          communicatißon: Math.ceil(Math.random() * 5),
          cleanliness: Math.ceil(Math.random() * 5),
          location: Math.ceil(Math.random() * 5),
          checkIn: Math.ceil(Math.random() * 5),
          value: Math.ceil(Math.random() * 5),
        },
      };
      listingReviews.push(review);
    }
    listing.reviews = listingReviews;
    listings.push(listing);
  }
  return listings;
};

module.exports = {
  createListings,
};
