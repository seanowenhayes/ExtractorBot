function CouchPersistence (dbUrl, dbName, cb) {
    var self = this;
    this.nano = require('nano')(dbUrl || 'http://localhost:5984');
    this.databaseName = dbName || 'extractorBotCouchPersistence',
    this.db;

    self.nano.db.destroy(self.databaseName, function () {
        self.nano.db.create(self.databaseName, function (err, body) {
            if (err) {
                console.log('The bot failed due to creating the db %s, please check your setup.', self.databaseName);
                console.log(err);
                cb && cb(err);
            }
            console.log('Succesfully made db %s', self.databaseName);
            self.db = self.nano.use(self.databaseName, function (err) {
                err && console.log(err);
            });
            cb && cb();
        });
    });
}

CouchPersistence.prototype.persist = function (toPersist) {
    this.db.insert(toPersist, function (err) {
        err && console.log(err);
    });
}

module.exports = CouchPersistence;