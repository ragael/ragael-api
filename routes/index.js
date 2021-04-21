var express = require('express');
var axios = require('axios').default
var { chromium } = require('playwright');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gethtml', async function (req, res, next) {
  let url = req.query.url || '';
  if (url == '') {
    res.status(400);
  } else {
    try {
      var html = await axios.get(url);
      res.send({ html: html.data });
    } catch (error) {
      var browser = await chromium.launch();
      var page = await browser.newPage();
      await page.goto(url);
      var html = await page.content();
      res.send({ html: html });
    }
  }
});

module.exports = router;
