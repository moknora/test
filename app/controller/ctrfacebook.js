Ext.define('SoCool.controller.ctrfacebook', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            '#fbLoginBtn': {
                tap: 'onFbLoginBtn'
            }
        }
    },

    init: function(application) {
        this.callParent();

	    Parse.initialize("Your Parse.com App ID", "Your Parse.com JS ID");
        window.fbAsyncInit = function() {
	        Parse.FacebookUtils.init({
		        appId      : "Your Facebook Client ID", // Facebook App ID
		        channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
		        status     : true, // check login status
		        cookie     : true, // enable cookies to allow Parse to access the session
		        xfbml      : true  // parse XFBML
		    });
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
		
        Ext.Viewport.animateActiveItem(Ext.getCmp('viewMain'), {
	        type: 'slide',
	        direction: 'right'
        });
    }

});
