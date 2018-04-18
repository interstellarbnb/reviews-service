const frisby = require('frisby');

it('should be a teapot', (done) => {
  frisby.get('http://httpbin.org/status/418')
    .expect('status', 418)
    .done(done);
});
