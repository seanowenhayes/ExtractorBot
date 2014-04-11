Ext.define('Scrape.view.crawl.List', {
    extend: 'Ext.List',
    xtype: 'crawllist',
    config: {
        title: 'list',
        layout: 'fit',
        store: 'CrawlStore',
        itemTpl: 'name: {startUrl}'
    }
});
