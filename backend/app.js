const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
require('dotenv/config');


// Import Route
const postRoute = require('./routes/workable')
app.use('/workable', postRoute)


// LISTENING TO SERVER
app.listen(8000);