var Bot = require('./Bot.js'),
    Persistence = require('./persistence/CouchPersistence'),
    persistence = new Persistence('http://localhost:5984', 'jamieoliver_com', function (err) {
    err && console.log(err);
    !err && console.log('new persistence made ok...');
});

var options = {
    startUrl: 'http://www.jamieoliver.com/recipes',
    crawlLevels: [{
        path: '/recipes',
        cssExpression: '.subnav_main_ingredient a'
    }, {
        path: '/recipes/:category',
        cssExpression: 'div.copy > h3 > a'
    }],
    extractions: [{
        type: 'image',
        name: 'image',
        cssExpression: '.recipe_image_main img',
        defaultValue: ''
    }, {
        type: 'text',
        cssExpression: 'header h1.fn',
        name: 'title',

        defaultValue: ''
    }, {
        type: 'text',
        name: 'description',
        cssExpression: 'article.recipe_description',
        defaultValue: ''
    }, {
        type: 'text',
        name: 'method',
        cssExpression: 'article.method',
        defaultValue: ''
    }, {
        type: 'text',
        name: 'ingredients',
        cssExpression: 'p.ingredient'
    }],
    extractionPath: '/recipes/:category/:recipe'
}

bot = new Bot(options);
bot.persistence = persistence;

bot.start();