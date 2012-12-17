Ext.define('SoCool.model.Booking', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'rottonId', type: 'auto'},
            {name: 'title', type: 'auto'},
            {name: 'schedule', type: 'auto'},
            {name: 'location', type: 'auto'},
            {name: 'description', type: 'auto'},
            {name: 'uploadTime', type: 'auto'},
            {name: 'host', type: 'auto'},
            {name: 'nMembers', type: 'auto'}
        ]
    }
});


