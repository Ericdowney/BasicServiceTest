const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let data = [];

app.get('/', (req, res) => {
    res.send({ hello: 'world!' });
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.post('/data', (req, res) => {
    data.push(req.body);
    res.sendStatus(200);
});

app.delete('/data', (req, res) => {
    data = [];
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));