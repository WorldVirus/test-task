const express = require('express');
// const body = require('body-parser');
// const cors = require('cors');
// const cookie = require('cookie-parser');
const app = express();
// const morgan = require('morgan');
// const fallback = require('express-history-api-fallback');

// app.use(morgan('dev'));

// app.use(express.static('public'));
// app.use(express.static('dist'));
// app.use(fallback('index.html', { root: 'public' }));

// app.use(body.json());
// app.use(cookie());
// app.get('/', function(req, res)  {
//     res.send('404');
// });
// /*
// var express = require('express');
// var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(express.static(path.join(__dirname + '/dist')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log(__dirname);
});

app.listen(8080);