Ext.define('Scrape.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Scrape.view.crawl.Create',
        'Scrape.view.crawl.List',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                
                iconCls: 'home',
                xtype: 'crawllist'
            },
            {
                
                iconCls: 'action',
                xtype: 'crawlcreate'
            }
        ]
    }
});
