Ext.define('Scrape.view.crawl.List', {
    extend: 'Ext.List',
    config: {
        layout: 'fit',
        store: 'CrawlStore',
        itemTpl: 'name: {startUrl}'
    }
});
