const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req, res, next) => {
  superagent
    .get('https://cnodejs.org')
    .end((err, sres) => {
      if(err) {
        return next(err)
      }
      var $ = cheerio.load(sres.text)
      var items = []
      $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });

      res.send(items);

    })
})

app.listen(3000, () => {
  console.log('3000端口启动成功')
})