const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const dbHelper = require('../database/index.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/:id', express.static(path.join(__dirname, '../client/public')));

app.get('/:id/reviews', ({ params }, res) => (
  dbHelper.getListings(params.id, (results, error) => {
    if (results) {
      res.send(results);
    } else {
      res.status(500).send('Could not get listings from database')
    }
  })
));

// Use for deployment on Docker
app.listen(80, () => console.log('Reviews app listening on port http://localhost:80'));

// Use for local testing
// app.listen(3002, () => console.log('Reviews app listening on port http://localhost:3002'));
