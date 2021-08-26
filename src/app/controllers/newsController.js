let Parser = require('rss-parser');
let parser = new Parser();

class NewsController {

    show (req, res) {
        (async () => {
            let feed = await parser.parseURL(`https://vnexpress.net/rss/${req.params.slug1}.rss`);
            let item = feed.items.map((item) => {
                return item
            });
            res.render('news', {item})         
        })();
    }

    detail (req, res) {
       res.redirect(`https://vnexpress.net/${req.params.slug1}/${req.params.slug2}`)
    }
}

module.exports = new NewsController();
