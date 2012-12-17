Ext.define('SoCool.controller.view', {
    extend: 'Ext.app.Controller',
    requires: [
        'SoCool.view.Login',
        'SoCool.view.Map',
        'SoCool.view.Main',
        'SoCool.controller.ctrfacebook',
        'SoCool.view.Post'
    ],
    config: {
        refs: {
        	bookingList: 'bookingList',
        	main: 'main',
        	isPast: '#isPast',
        	filterByIsUpcoming: '#filterByIsUpcoming',
        	filterByIsPast: '#filterByIsPast',
        	basketPopUpBtn: '#basketPopUpBtn',
        	pushPopUpBtn: '#pushPopUpBtn',
        	postBtn: '#postBtn'
        },
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
        	},
        	"#backFromPostBtn":{
	        	tap: 'tappedBackFromPostBtn'
        	},
        	basketPopUpBtn:{
	        	tap: 'tappedBasketPopUpBtn'
        	},
        	pushPopUpBtn:{
	        	tap: 'tappedPushPopUpBtn'
        	},
        	postBtn:{
	        	tap: 'tappedPostBtn'
        	}/*,
        	
        	Ext.Viewport:{
        		activeitemchange: 'activeItemChanged'
        	}/*,
        	"#viewMain":{
        	    activate: 'activatedMain'
        	}*/
        	
        	     
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
        SoCool.app.getController('SoCool.controller.ctrfacebook').onActionByLoginStatus();
	    //Ext.getCmp('viewLogin').hide();
    },
    
    
    onLoginBtn: function(button, e, options) {
        this.addViewLogin();
    },
    
    addViewMap: function() {
/*        if (!this.viewMap) {
            this.viewMap = Ext.create('SoCool.view.Map');
        }
        //Ext.Viewport.setActiveItem(this.viewMap);
        Ext.Viewport.animateActiveItem(this.viewMap, {
	        type: 'slide',
	        direction: 'right'
        });
        Ext.getCmp('viewMap').showMapText();


*/

        if (!this.viewPost) {
            this.viewPost = Ext.create('SoCool.view.Post');
        }
        //Ext.Viewport.setActiveItem(this.viewMap);
        Ext.Viewport.animateActiveItem(this.viewPost, {
	        type: 'slide',
	        direction: 'up'
        });

    },
    hideViewMap: function(button, e, options) {
        //Ext.Viewport.setActiveItem(Ext.getCmp('viewMain'));
        Ext.Viewport.animateActiveItem(Ext.getCmp('viewMain'), {
	        type: 'slide',
	        direction: 'left'
        });
        SoCool.app.getController('SoCool.controller.ctrfacebook').onActionByLoginStatus();
	    //Ext.getCmp('viewMap').hide();
    },
    onMapBtn: function(button, e, options) {
        this.addViewMap();

<<<<<<< HEAD
//Master only
=======
//add Map branch only
>>>>>>> AddMap
/*
		Ext.device.Geolocation.getCurrentPosition({
			success: function(position) {
				console.log(position.coords);
			},
			failure: function() {
				console.log('something went wrong!');
			}
		});

*/


    },
    
    tappedPostBtn: function(button, e, options) {
        if (!this.viewPost) {
            this.viewPost = Ext.create('SoCool.view.Post');
        }
        //Ext.Viewport.setActiveItem(this.viewMap);
        Ext.Viewport.animateActiveItem(this.viewPost, {
	        type: 'slide',
	        direction: 'up'
        });
        //Ext.getCmp('viewMap').showMapText();   
    },
     
    tappedBackFromPostBtn: function(button, e, options) {
        Ext.Viewport.animateActiveItem(Ext.getCmp('viewMain'), {
	        type: 'slide',
	        direction: 'down'
        });
//        SoCool.app.getController('SoCool.controller.ctrfacebook').onActionByLoginStatus();
	    //Ext.getCmp('viewLogin').hide();
        //Ext.getCmp('viewMap').showMapText();   
    },    
    
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