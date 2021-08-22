const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();


// Parser application json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Panggil route
var route = require('./route');
route(app);

// Daftarkan menu route dari index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});