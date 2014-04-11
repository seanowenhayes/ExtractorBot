Ext.define('Scrape.model.Level', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'path', type: 'string' },
            { name: 'cssExpression', type: 'string' }

        ]
    }
});
