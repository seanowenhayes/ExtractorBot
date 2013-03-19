var Spider = require('spider'),
    s = Spider(),
    url = require('url'),
    Extraction = require('./extract/Extraction.js'),
    ImageExtraction = require('./extract/ImageExtractor.js');

s.log('debug');//TODO remove after debugging!!!

function Bot (options) {
    var self = this;
    options = options || {};
    this.startUrl = url.parse(options.startUrl);
    this.extractions = [];
    if (options.extractions) {
        options.extractions.forEach(function (extraction) {
            var Extractable = extraction.type == 'image' ? ImageExtraction : Extraction;
            self.addExtraction(new Extractable(extraction.name, extraction.cssSelector, extraction.defaultValue));
        })
    }

    if (options.crawlLevels) {
        options.crawlLevels.forEach(function (crawlLevel) {
            self.addCrawlLevel(crawlLevel.path, crawlLevel.cssExpression);
        });
    }

    options.extractionPath && self.setExtractionPath(options.extractionPath);

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