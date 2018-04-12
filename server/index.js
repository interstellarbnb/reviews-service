const dbHelper = require('../database/index.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('../client/public'));

app.get('/reviews/:id', (req, res) => (
    dbHelper.getListings(req.params.id, function(results) {
        res.send(results);
    })
));

app.listen(3002, () => console.log('Example app listening on port localhost:3002'))