// Crawl model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ExtractionSchema = require('./Extraction').Schema,
    LevelSchema = require('./Level').Schema;


var CrawlSchema = new Schema({
    title: String,
    startUrl: String,
    extractionPath: String,
    crawlLevels: [LevelSchema],
    extractions: [ExtractionSchema]
});

mongoose.model('Crawl', CrawlSchema);
