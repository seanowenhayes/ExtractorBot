module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);


    //crawl route
    var crawlCtrl = require('../app/controllers/crawlCtrl');
    app.get('/api/v1', crawlCtrl.list);
    app.get('/api/v1/:crawlId', crawlCtrl.read);
    app.post('/api/v1', crawlCtrl.create);
    app.put('/api/v1/:crawlId', crawlCtrl.update);
    app.delete('/api/v1/:crawlId', cralwCtrl.destroy);

};
