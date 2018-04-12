const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('../client/public'));

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3002, () => console.log('Example app listening on port localhost:3002'))