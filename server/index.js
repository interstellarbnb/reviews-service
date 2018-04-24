const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const dbHelper = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/reviews/:id', ({ params }, res) => (
  dbHelper.getListings(params.id, (results) => {
    res.send(results);
  })
));

app.listen(3002, () => console.log('Reviews app listening on port http://localhost:3002'));

// if I add a post request to post a review, I will need to re-calculate the summary star ratings.
// Danny suggested the easiest way to do that is ((avg * n) + new / n + 1)