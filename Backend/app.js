const express = require('express');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const config = require('./utils/config');
const cors = require('cors');
const mongoose = require('mongoose');

app = express();
logger.info('connecting to', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI)
.then(() => {
    logger.info('connected to MongoDB');
})
.catch((error) => {
    logger.error('error connecting to MongoDB: ', error.message)
})

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);


const resultRouter = require('./Routers/resultRouter');
app.use('/api/results', resultRouter);

module.exports = app;