var mongoose = require('mongoose'),
    Crawl = mongoose.model('Crawl');

exports.list = function (req, res) {
    Crawl.find(function (err, crawls){
        if (err) {
            return res.json(404, {
                message: 'No crawls'
            });
        }
        return res.json(200, crawls);
    });
};


exports.create = function (req, res) {
    res.json(500, {
        message: 'TODO'
    });
};

exports.read = function (req, res) {
    res.json(500, {
        message: 'TODO'
    });
};

exports.update = function (req, res) {
    res.json(500, {
        message: 'TODO'
    });
};

exports.destroy = function (req, res) {
    ress.json(500, {
        message: 'TODO'
    });
};