Ext.define('SoCool.controller.view', {
    extend: 'Ext.app.Controller',
    requires: [
        'SoCool.view.Login',
        'SoCool.view.Map'
    ],
    config: {
        control: {
	        "#loginBtn":{
	        	tap: 'onLoginBtn'
        	},
        	"#mapBtn":{
	        	tap: 'onMapBtn'
        	},
        	
        	"#goBackFromLogin":{
	        	tap: 'hideViewLogin'	
        	},
        	
        	"#goBackFromViewMap":{
	        	tap: 'hideViewMap'
        	},

        	"#reviewPopUpButton":{
	        	tap: 'tappedReviewPopUpButton'
        	}
            
        }
    },
    
    init: function(application) {
	    this.callParent();
	    Ext.getStore('Bookings').on('load', this.onBookingsLoad);

    },
    
    
    
    addViewLogin: function() {
        if (!this.viewLogin) {
            this.viewLogin = Ext.create('SoCool.view.Login');
        }
        //Ext.Viewport.setActiveItem(this.viewLogin);
        Ext.Viewport.animateActiveItem(this.viewLogin, {
	        type: 'slide',
	        direction: 'left'
        });
        Ext.getCmp('viewLogin').showLoginText();
    },
    
    hideViewLogin: function(button, e, options) {
        //Ext.Viewport.setActiveItem(Ext.getCmp('viewMain'));
        Ext.Viewport.animateActiveItem(Ext.getCmp('viewMain'), {
	        type: 'slide',
	        direction: 'right'
        });
	    //Ext.getCmp('viewLogin').hide();
    },
    
    
    onLoginBtn: function(button, e, options) {
        this.addViewLogin();
    },
    
    addViewMap: function() {
        if (!this.viewMap) {
            this.viewMap = Ext.create('SoCool.view.Map');
        }
        //Ext.Viewport.setActiveItem(this.viewMap);
        Ext.Viewport.animateActiveItem(this.viewMap, {
	        type: 'slide',
	        direction: 'right'
        });
        Ext.getCmp('viewMap').showMapText();
    },
    hideViewMap: function(button, e, options) {
        //Ext.Viewport.setActiveItem(Ext.getCmp('viewMain'));
        Ext.Viewport.animateActiveItem(Ext.getCmp('viewMain'), {
	        type: 'slide',
	        direction: 'left'
        });
	    //Ext.getCmp('viewMap').hide();
    },
    onMapBtn: function(button, e, options) {
        this.addViewMap();
    },
     
     
/*     
        onMovieTap: function(record) {
        WL.app.updateUrl('movies/' + record.get('rottenId'));
        this.showMovie(record);
    },
    
        showMovie: function(record) {
        WL.currentMovie = record;

        if (!this.movieDetailCmp) {
            this.movieDetailCmp = Ext.widget('movieDetail');
        }

        this.getToolbar().setTitle(record.get('title'));

        Ext.Viewport.animateActiveItem(this.movieDetailCmp, {
            type: 'slide',
            direction: 'left'
        });

        // This needs to be after the item is painted so we can set the content height
        this.movieDetailCmp.setRecord(record);
    },
    
    */
    
    
    tappedReviewPopUpButton: function(button, e, options) {
    
//        Ext.getView('Main').setMasked({
 //       	xtype: 'loadmask',
 //           message: 'Loading Bookings...'
 //       });
        Ext.getStore('Bookings').load();
    },
    
    onBookingsLoad: function(store){
    
    
    	var bookingList = Ext.getCmp('bookingList');
    	
        if (store.getCount()) {
            if (!bookingList) {
                bookingList = Ext.create('SoCool.view.booking.List', {
                    id: 'bookingList'
                });
            }
        } else {
        }    
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
    	Ext.Viewport.add(Ext.create('SoCool.view.Main'));
    	var viewMain = Ext.getCmp('viewMain'),
    		viewBookingList = Ext.getCmp('viewBookingList');
        if (!viewBookingList) {
            viewBookingList = Ext.create('SoCool.view.booking.List');
        }
        viewMain.setActiveItem(viewBookingList);    
    }
});