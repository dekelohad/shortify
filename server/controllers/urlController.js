const logger = require('../pino-logging/logger');
const ShortUrl = require('../models/shortUrl');

// @route     POST /api/urls
// @desc      Create a short URL.

const createUrl = async (req, res) => {
  const { fullUrl, shortUrl } = req.body;
  const fullUrlIsAlreadyExists = await ShortUrl.findOne({ fullUrl });

  if (fullUrlIsAlreadyExists) {
    logger.info(`${fullUrl} fullUrl is already exist in the db`);
    res.status(409);
    throw new Error('fullUrl is already exist in the db');
  }

  const newCreatedShortUrl = await ShortUrl.create({
    fullUrl: fullUrl,
    shortUrl: shortUrl,
  });
  logger.info('newShortUrl has been created:', newCreatedShortUrl);
  res.status(200).json(newCreatedShortUrl);
};

// @route     DELETE /api/urls/:shortUrl
// @desc      Delete a URL

const deleteUrl = async (req, res) => {
  const shortUrlToDelete = req.params.shortUrl;

  const { deletedCount } = await ShortUrl.deleteOne({
    shortUrl: shortUrlToDelete,
  });

  if (!deletedCount) {
    logger.error('Could not find delete the given url');
    res.status(405);
    throw new Error('Could not delete the given url');
  }
  logger.info(`shortUrl:${shortUrlToDelete} has been deleted`);
  res.status(200).json(shortUrlToDelete);
};

// @route     GET /api/urls/:shortUrl
// @desc      Get all URLS

const getUrls = async (req, res) => {
  const shortUrls = await ShortUrl.find();

  if (!shortUrls) {
    logger.error('Could not get all urls');
    res.status(405);
    throw new Error('Could not get all urls');
  } else {
    logger.info('shortUrls:', shortUrls);
    res.status(200).json(shortUrls);
  }
};

// @route     GET /api/urls/:shortUrl
// @desc      get a URL

const getUrl = async (req, res) => {
  const url = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });

  if (!url) {
    logger.error('Could not find the given url');
    res.status(405);
    throw new Error('URL could not be found');
  }

  logger.info('shortUrlToRedirect Found::', url);
  url.clicks += 1;
  url.save();
  res.status(200).json({ urlToRedirect: url.fullUrl });
};

module.exports = {
  createUrl,
  deleteUrl,
  getUrls,
  getUrl,
};
