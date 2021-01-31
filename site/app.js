const path = require('path');

const express = require('express');

const app = express();

const PublicPath = path.resolve(__dirname, './public');
app.use(express.static(PublicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/partials/index.ejs'));
});

app.listen(3000, () => { 
    console.log('-----------------------------------------------')
    console.log('Todo salio OK! Ya podés ir a http://localhost:3000');
    console.log('-----------------------------------------------')
});