Ext.define('SoCool.model.XMLModel', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'name', type: 'auto'},
            {name: 'value', type: 'auto'}
        ]
    }
});