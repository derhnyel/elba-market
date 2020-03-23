const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const auth = require('./routes/api/v1/auth');
const product = require('./routes/api/v1/product');

const app = express();

// Enable cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = process.env.localURI;

// Connect to the mongodb
mongoose.connect(process.env.mongoURI || db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Passport Middleware
app.use(passport.initialize());
// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/product', product);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App has Started on port ${port}`);
});
