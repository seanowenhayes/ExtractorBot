var Bot = require('./Bot.js'),
    ImageExtractor = require('./extract/ImageExtractor.js'),
    Extractor = require('./extract/Extraction.js'),
    bot = new Bot('http://www.jamieoliver.com/recipes');

bot.addCrawlLevel('/recipes', '.subnav_main_ingredient a');
bot.addCrawlLevel('/recipes/:category', 'div.copy > h3 > a');
bot.addExtraction(new ImageExtractor('image', '.recipe_image_main img', ''));
bot.addExtraction(new Extractor('title', 'header h1.fn', ''));
bot.addExtraction(new Extractor('description', 'article.recipe_description'));
bot.addExtraction(new Extractor('method', 'article.method'));
bot.addExtraction(new Extractor('method', 'article.method'));
bot.addExtraction(new Extractor('ingredients', 'p.ingredient'));

bot.setExtractionPath('/recipes/:category/:recipe');
bot.start();