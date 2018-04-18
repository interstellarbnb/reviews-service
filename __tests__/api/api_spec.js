const frisby = require('frisby');

it('should return a status of 200', (done) => {
  frisby.get('http://localhost:3002/reviews/2')
    .expect('status', 200)
    .done(done);
});
