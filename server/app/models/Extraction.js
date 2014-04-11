// Extraction model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExtractionSchema = new Schema({
    type: String,
    name: String,
    cssExpression: String,
    defaultValue: {
        type: String,
        "default": ""
    }
});

mongoose.model('Extraction', ExtractionSchema);

module.exports.Schema = ExtractionSchema;
