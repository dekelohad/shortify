const express = require('express');
const router = express.Router();

const {
  createUrl,
  deleteUrl,
  getUrls,
  getUrl,
} = require('../controllers/urlController');

router.post('/urls', createUrl);
router.delete('/urls/:shortUrl', deleteUrl);
router.get('/urls/', getUrls);
router.get('/urls/:shortUrl', getUrl);

module.exports = router;
