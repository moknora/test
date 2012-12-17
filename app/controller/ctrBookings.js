Ext.define('SoCool.controller.ctrBookings', {
    extend: 'Ext.app.Controller',
    requires: [
        'SoCool.view.Login',
        'SoCool.view.Map',
        'SoCool.view.Main',
        'SoCool.view.Post',
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
        	},
        	'#doPostBtn': {
        		tap: 'onDoPostBtn'
        	}
        }
    },
    
    init: function() {
	    this.callParent();
    },
    onDoFinishUpload: function(){
		this.meetingRoom.set("title", Ext.getCmp('titleField').getValue());
		this.meetingRoom.set("nMembers", Ext.getCmp('maxMembField').getValue());
		this.meetingRoom.set("location", Ext.getCmp('locationField').getValue());
		this.meetingRoom.set("description", Ext.getCmp('descriptionField').getValue());
    	var tmpTime = Ext.getCmp('meetingDate').getValue();
    	tmpTime.setHours(Ext.getCmp('hourField').getValue(),Ext.getCmp('minField').getValue(),0,0);
    	console.log(tmpTime);
    	this.meetingRoom.set("schedule", tmpTime);

    	this.meetingRoom.save(null, {
    	  success: function(meetingRoom) {
    	    // The object was saved successfully.
    		  console.log(meetingRoom);
    		  console.log("Success!!!");
    	  },
    	  error: function(meetingRoom, error) {
    	    // The save failed.
    	    // error is a Parse.Error with an error code and description.
    		  console.log(meetingRoom);
    		  console.log("Failed!!!");   		  
    		  
    	  }      
    	});
  
    },
    
    
    
    onDoPostBtn: function(button, e, options){
    	var MeetingRoom = Parse.Object.extend("MeetingRoom");
    	this.meetingRoom = new MeetingRoom();

		FB.api('/me', function(response) {
			console.log(response.id);
			console.log(response.name);
			SoCool.app.getController('SoCool.controller.ctrBookings').meetingRoom.set("rottonId", response.id);
			SoCool.app.getController('SoCool.controller.ctrBookings').meetingRoom.set("host", response.name);
			console.log('start:');
			console.log(SoCool.app.getController('SoCool.controller.ctrBookings').meetingRoom);
			console.log(':end/');	
			SoCool.app.getController('SoCool.controller.ctrBookings').onDoFinishUpload();
			
		});

		
		
        Ext.Viewport.animateActiveItem(Ext.getCmp('viewMain'), {
	        type: 'slide',
	        direction: 'down'
        });

    },
    	
    
    onIsPastToggle: function(segBtn, btn){

        if (btn.getText() === 'Upcoming'){
	    	this.getFilterByIsUpcoming().show();
	    	this.getFilterByIsPast().hide();
        }
        else{
	    	this.getFilterByIsUpcoming().hide();
	    	this.getFilterByIsPast().show();        		        
        }
    },
    onsortBySegBtnToggle: function(segBtn, btn){
/*    	Ext.getStore('Bookings').getProxy().setExtraParams({
    		"X-Parse-Application-Id": "KoatQ44GzePw6TFb9uOGhQavjfGZQvF7caD3AlyB",
        	"X-Parse-REST-API-Key": "vxeXTPvTLVcs8mHKpYKowZHQcvoHxCRQJpo7Ta71"
    	});*/
    	
    	
//    	this.getBookingList().setStore(Ext.getStore('Bookings')).add();
    	
    	
//        this.getBookingList().setStore(Ext.getStore('Bookings'));
        //Ext.getStore('Bookings').getProxy().setExtraParams({sort: btn.getText()});
        Ext.getStore('Bookings').loadPage(1);
    },
    
    
    
    
    onReload: function(){
        this.getBookingList().setMasked({ xtype: 'loadmask' });
        var MeetingRoom = Parse.Object.extend("MeetingRoom");
    	var TestCollection = Parse.Collection.extend({
    		  model: MeetingRoom
    	});
    	var collection = new TestCollection();
    		
    	collection.fetch({
    		success: function(collection) {
    			collection.each(function(object) {
    				console.log(object);
    				//var tmpMR = new Parse.Object.extend("MeetingRoom");
    				Ext.getStore('Bookings').add({
    					rottonId: object.get('rottonId'),
    					title: object.get('title'),
    					schedule: object.get('schedule'),
    					location: object.get('location'),
    					description: object.get('description'),
    					host: object.get('host'),
    					nMembers: object.get('nMembers'),
    					uploadTime: object.get('updatedAt')
    					
    				});
    		    });
    		},
    		error: function(collection, error) {
    		    // The collection could not be retrieved.
    			console.log(error);
    			console.log(collection);
    		}
    	});
    	this.getBookingList().setMasked({ xtype: 'loadmask' });
        Ext.getStore('Bookings').loadPage(1);
        this.getBookingList().deselectAll();
   	
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});