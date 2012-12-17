Ext.define('SoCool.controller.ctrfacebook', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {    
            basketPopUpBtn: '#basketPopUpBtn',
        	pushPopUpBtn: '#pushPopUpBtn',
        	postBtn: '#postBtn',
        	loginBtn: '#loginBtn'
        },
        control: {
            '#fbLoginBtn': {
                tap: 'onFbLoginBtn'
            }
        }
//        stores:	[
 //   		'Config'
 //   	]
    },
    

    init: function(application) {
        this.callParent();
//        if (!this.storeConfig) {
//            this.storeConfig = Ext.getStore('Config');
//}
//        console.log(Ext.getStore('Config'));
	    Parse.initialize('KoatQ44GzePw6TFb9uOGhQavjfGZQvF7caD3AlyB', 'Kh7jqqiQXytmpNmYeAx3jh3QdxYNVZLgukGvKzjf');
        window.fbAsyncInit = function() {
	        Parse.FacebookUtils.init({
		        appId      : '443176775731159', // Facebook App ID
		        channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
		        status     : true, // check login status
		        cookie     : true, // enable cookies to allow Parse to access the session
		        xfbml      : true  // parse XFBML
		    });
		    SoCool.app.getController('SoCool.controller.ctrfacebook').onActionByLoginStatus();
		    
		};

        (function(d){
            var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
            js = d.createElement('script'); js.id = id; js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            d.getElementsByTagName('head')[0].appendChild(js);
       }(document));
    },
    

    onFbLoginBtn: function(button, e, options) {
        this.onFbLogin();
    },
    // Redirect to Facebook when the user taps the Facebook Login button
    onFbLogin: function() {

        Parse.FacebookUtils.logIn(null, {
	        success: function(user) {
		        if (!user.existed()) {
			        alert("User signed up and logged in through Facebook!");
			        
			    } else {
				    alert("User logged in through Facebook!");
				}
			},
			error: function(user, error) {
				alert("User cancelled the Facebook login or did not fully authorize.");
			}
		});
		this.onActionByLoginStatus();
        Ext.Viewport.animateActiveItem(Ext.getCmp('viewMain'), {
	        type: 'slide',
	        direction: 'right'
        });
    },
//SoCool.app.getController('SoCool.controller.ctrfacebook').onActionByLoginStatus();
    
    onActionByLoginStatus: function() {

		FB.getLoginStatus(function(response) {
			console.log(response);
			if (response.status === 'connected') {
	// the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    	//			    var uid = response.authResponse.userID;
	//			    var accessToken = response.authResponse.accessToken;

    			console.log("Connected");
    			Ext.getCmp('loginBtn').hide();
    			Ext.getCmp('basketPopUpBtn').show();
    			Ext.getCmp('pushPopUpBtn').show();
    			Ext.getCmp('postBtn').show();
			} else if (response.status === 'not_authorized') {
				console.log("the user is logged in to Facebook, but has not authenticated your app");
    			Ext.getCmp('loginBtn').show();
    			Ext.getCmp('basketPopUpBtn').hide();
    			Ext.getCmp('pushPopUpBtn').hide();
    			Ext.getCmp('postBtn').hide();
    			// the user is logged in to Facebook, 
    			// but has not authenticated your app

    		} else {
	    		console.log("the user isn't logged in to Facebook");
    			Ext.getCmp('loginBtn').show();
    			Ext.getCmp('basketPopUpBtn').hide();
    			Ext.getCmp('pushPopUpBtn').hide();
    			Ext.getCmp('postBtn').hide();
    			// the user isn't logged in to Facebook.

    		}    
  		});
    }

});
