Ext.define('SoCool.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    id: 'viewMain',
    requires: [
        'SoCool.view.booking.List'
    ],
    
    config: {
    
    	layout:{
	    	type: 'card',
	    	animation: {
		    	type: 'fade'
	    	}
    	},

        items: [
        	{
	        	docked: 'top',
	        	xtype: 'toolbar',
	        	title: 'SoCool',
	        	items: [
	        	
	        		{
	                    xtype: 'button',
	                    align: 'left',
	                    id: 'menuBtn',
	                    text: 'Menu'
		            },
		            {
		                xtype: 'button',
		                align: 'left',
		                id: 'mapBtn',
		                text: 'Map'
		            },

		            {    xtype: 'spacer'    },

		            {
		            	xtype: 'button',
		            	align: 'right',
		            	id: 'loginBtn',
		            	text: 'Login'
		            },
		            {
	                    xtype: 'button',
		            	hidden: true,
	                    align: 'right',
	                    id: 'basketPopUpBtn',
	                    text: 'Basket'
		            },
	                {
		                xtype: 'button',
		                hidden: true,
		                align: 'right',
		                id: 'pushPopUpBtn',
		                text: 'Push'
		            },
		            {
		            	xtype: 'button',
		            	hidden: true,
		            	align: 'right',
		            	id: 'accountBtn',
		            	text: 'Account'
		            }
		          	        	
	        	
	        	]
        	}/*,
        	{
        		xtype: 'bookingList'
        	}
            */
        ]
    },
    
    initialize: function() {
	    this.callParent();
	    
    }
    
});
