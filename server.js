const express = require('express');
const path = require('path');
const cv = require('./data.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('index', { cv });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});