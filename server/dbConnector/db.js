const logger = require('../pino-logging/logger');

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(`mongoDB is connected`);
  } catch (error) {
    logger.error(error);
  }
};
module.exports = connectDB;
