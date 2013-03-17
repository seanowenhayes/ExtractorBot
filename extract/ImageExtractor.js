var util = require('util');
    Extraction = require('./Extraction.js');

function ImageExtractor (name, cssSelector, value) {
    Extraction.apply(this, arguments);
}

util.inherits(ImageExtractor, Extraction);

ImageExtractor.prototype.setValue = function (value) {
    this.value = value.attr('src')
};

module.exports = ImageExtractor;