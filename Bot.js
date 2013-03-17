var Spider = require('/home/sean/Development/javascript/spider'),
    s = Spider(),
    url = require('url');

s.log('debug');//TODO remove after debugging!!!

function Bot (startUrl, persistence) {
    var self = this;
    this.startUrl = url.parse(startUrl);
    this.extractions = [];
    var Persistence = require(persistence || './persistence/CouchPersistence');
    this.persistence = new Persistence('http://localhost:5984', 'jamieoliver_com', function (err) {
        err && console.log(err);
        !err && console.log('new persistence made ok...');
    });

}

/**
 * start the bot.
 */
Bot.prototype.start = function () {
    s.get(this.startUrl.href);
};

Bot.prototype.addCrawlLevel = function (pathExpression, cssExpression) {
    var self = this;
    s.route(self.startUrl.host, pathExpression, function (window, $) {
        $(cssExpression).each(function (i, el) {
            var href = el.href;
            if (href) {
                var nextLink = self.startUrl.protocol + '//' +self.startUrl.host + url.parse(href).path;
                s.get(nextLink);
            }
        });
    });
};

/**
 * Set the path that matches the path of detail pages for extraction.
 * @param pathExpression
 */
Bot.prototype.setExtractionPath = function (pathExpression) {
    var self = this;
    s.route(self.startUrl.host, pathExpression, function (window, $) {
        var result = {};
        self.extractions.forEach(function (extraction) {
            extraction.extract(window, $);
            result[extraction.name] = extraction.value;
        });
        self.persistence.persist(result);
    });
};

Bot.prototype.addExtraction = function (extraction) {
    this.extractions.push(extraction);
};

module.exports = Bot;