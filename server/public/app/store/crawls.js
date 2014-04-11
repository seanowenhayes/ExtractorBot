// Store for crawls
Ext.define('Scrape.store.crawls', {
    extend: 'Ext.data.Store',
    requires: ['Scrape.model.Crawl'],
    config: {
        model: 'Scrape.model.Crawl',
        storeId: 'CrawlStore',
        autoLoad: true,
        url: '/api/v1/crawl'
    }
});