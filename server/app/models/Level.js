// Level Model

// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LevelSchema = new Schema({
    path: String,
    cssExpression: String
});

mongoose.model('Level', LevelSchema);

module.exports.Schema = LevelSchema;
