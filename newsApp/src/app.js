const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
var hbs = require('hbs');

//public directory
const publicDirc = path.join(__dirname, '../public');
app.use(express.static(publicDirc));

//  template engine
app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname, '../templates/views');
app.set('views', viewsPath);


const news = require('./newsapp');

app.get('/', (req, res) => {
    news((error, data) => {
        error ? res.render('Error', {error}) : res.render('news', {news: data.news})
    });
});



app.listen(port, () => {
    console.log(`Server is listening on  http://localhost:${port}`);
});