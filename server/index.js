const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const dbHelper = require('../database/index.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/reviews/:id', ({ params }, res) => (
  dbHelper.getListings(params.id, (results) => {
    res.send(results);
  })
));

app.listen(3002, () => console.log('Reviews app listening on port http://localhost:3002'));
