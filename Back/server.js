let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
let logger = require('morgan');
// routes
let functionsRoutes = require('./routes/code.routes');
// -----

let app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/librairie', functionsRoutes);
// -----

// DB
let mongoose = require('mongoose');
let mongoDB = 'mongodb://localhost:27042/RyaLib';

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// -----

module.exports = app;
