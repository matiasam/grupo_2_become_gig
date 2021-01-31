const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const PublicPath = path.resolve(__dirname, './public');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
});


app.listen(3000, () => { 
    console.log('-----------------------------------------------')
    console.log('Todo salio OK! Ya podés ir a http://localhost:3000');
    console.log('-----------------------------------------------')
});