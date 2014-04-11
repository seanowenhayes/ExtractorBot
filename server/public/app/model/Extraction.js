Ext.define('Scrape.model.Extraction', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'type', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'cssExpression', type: 'string' },
            { name: 'defaultValue', type: 'string' }

        ]
    }
});
