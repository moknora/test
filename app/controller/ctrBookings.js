Ext.define('SoCool.controller.ctrBookings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	bookingList: 'bookingList',
        	main: 'main',
        	isPast: '#isPast',
        	filterByIsUpcoming: '#filterByIsUpcoming',
        	filterByIsPast: '#filterByIsPast'
        },
        control: {
        	isPast: {
	        	toggle: 'onIsPastToggle'
        	},
        	filterByIsUpcoming: {
	        	toggle: 'onFilterByIsUpcomingToggle'
        	},
        	
           	filterByIsPast: {
	        	toggle: 'onFilterByIsPastToggle'
        	},
        	'#sortBy': {
	        	toggle: 'onSortByToggle'
        	}            
        }
    },
    
    init: function() {
	    this.callParent();
    },
    
    onIsPastToggle: function(segBtn, btn){

        if (btn.getText() === 'Upcoming'){
	    	this.getFilterByIsUpcoming().show();
	    	this.getFilterByIsPast().hide();
	    	
	    	//Ext.getStore('Bookings').loadPage(1);	    
        }
        else{
	    	this.getFilterByIsUpcoming().hide();
	    	this.getFilterByIsPast().show();        		        
        }
    },
    onSortByToggle: function(segBtn, btn){

        this.getBookingList().setStore(Ext.getStore('Bookings'));
        this.getBookingList().setMasked({ xtype: 'loadmask' });
        this.getBookingList().deselectAll();

        //Ext.getStore('Bookings').getProxy().setExtraParams({sort: btn.getText()});
        Ext.getStore('Bookings').loadPage(1);
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});