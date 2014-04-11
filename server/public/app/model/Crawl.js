Ext.define('Scrape.model.Crawl', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'title', type: 'string' },
            { name: 'startUrl', type: 'string' },
            { name: 'extractionPath', type: 'string' }

        ]
    }
});
