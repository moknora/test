Ext.define('SoCool.controller.ctrBookings', {
    extend: 'Ext.app.Controller',
    requires: [
        'SoCool.view.Login',
        'SoCool.view.Map',
        'SoCool.view.Main',
        'SoCool.controller.ctrfacebook'
    ],    
    config: {
        refs: {
        	bookingList: 'bookingList',
        	main: 'main',
        	isPast: '#isPast',
        	filterByIsUpcoming: '#filterByIsUpcoming',
        	filterByIsPast: '#filterByIsPast',
        	        	loginBtn: '#loginBtn'


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
        	'#sortBySegBtn': {
	        	toggle: 'onsortBySegBtnToggle'
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
	    	//SoCool.app.getController('SoCool.controller.ctrfacebook').onActionByLoginStatus();
//Ext.getCmp('ctrFacebook').onActionByLoginStatus();
	    	//Ext.getStore('Bookings').loadPage(1);	    
        }
        else{
	    	this.getFilterByIsUpcoming().hide();
	    	this.getFilterByIsPast().show();        		        
        }
    },
    onsortBySegBtnToggle: function(segBtn, btn){

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