
Ext.define('SoCool.store.Bookings', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'SoCool.model.Booking',

        pageSize: 20,
        
        data: [
        	{
        		rottonId:	"100001382765294",
        		title:		"Interesting Booking",
        		schedule:	"2012-12-24 3:20:01 PM",
        		location:	"청담안",
        		description:	"재밌다 신난다 가슴떨린다",
        		uploadTime:	"2012-12-07 3:20:01 PM",
        		host:		"moknora",
        		nMembers:	6
        	},
        	{
        		rottonId:	"100001382765294",
        		title:		"Interesting Booking2",
        		schedule:	"2012-12-25 3:20:01 PM",
        		location:	"청담안2",
        		description:	"재밌다 신난다 가슴떨린다",
        		uploadTime:	"2012-12-08 3:20:01 PM",
        		host:		"moknora2",
        		nMembers:	8
        	},
        	{
        		rottonId:	"100001382765294",
        		title:		"Interesting Booking3",
        		schedule:	"2012-12-26 4:20:01 PM",
        		location:	"청담안3",
        		description:	"재밌다 신난다 가슴떨린다",
        		uploadTime:	"2012-12-08 4:20:01 PM",
        		host:		"moknora3",
        		nMembers:	2
        	}]

/*        proxy: {
            type: 'jsonp',
            url: 'https://api.parse.com/1/classes/MeetingRoom',
//            method: 'GET',
            callbackKey: "callback",
            

            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }*/
    }
});
