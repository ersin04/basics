const express = require('express');
const app = express();

app.get('', (req,res) => {

    res.send('Hallo Welt');

});

app.get('/ersin', (req,res) => {

    res.send('Ersin seine seite');

});

app.listen(3000, () => {

    console.log('Hat geklappt');

});