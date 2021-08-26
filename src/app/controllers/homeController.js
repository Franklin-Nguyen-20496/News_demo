let Parser = require('rss-parser');
let parser = new Parser();

class HomeController {

    // GET /:slug1
    home (req, res) {
        (async () => {
            let feed = await parser.parseURL(`https://vnexpress.net/rss/tin-moi-nhat.rss`);
            let item = feed.items.map((item) => {
                return item
            });
            res.render('news', {item})         
        })();
    }
}
module.exports = new HomeController();
