Ext.define('Scrape.view.crawl.Create', {
    extend: 'Ext.form.Panel',
    requires: [],
    xtype: 'crawlcreate',
    config: {
        title: 'create',
        items: [{
            xtype: 'textfield',
            name: 'title',
            label: 'Title'
        }, {
            xtype: 'textfield',
            name: 'startUrl',
            label: 'Start URL'
        }, {
            xtype: 'textfield',
            name: 'extractionPath',
            label: 'Extraction Path'
        }, {
            xtype: 'button',
            text: 'Create',
            itemId: 'crawlCreateButton',
            ui: 'action-round',
            margin: 20
        }]
    }
});