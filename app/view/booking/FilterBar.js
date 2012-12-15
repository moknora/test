/**
 * The definition for the FilterBar at the top of the booking list
 */
Ext.define('SoCool.view.booking.FilterBar', {

	extend: 'Ext.Toolbar',
	xtype: 'bookingFilterBar',
	requires: [
		'Ext.SegmentedButton'
	],
	config: {

		//cls: 'sort',
		id: 'filterContainer',
		//style: 'visibility: hidden',

		items: [
			{
				align: 'left',
				xtype: 'segmentedbutton',
				id: 'isPast',
				flex: 0.5,

				layout: {
					pack: 'center'
				},

				defaults: {
		    		xtype: 'button',
		    		flex: 1
				},

				items: [
		    		{ text: 'Upcoming', pressed: true, id: 'isSetUpcoming' },
		    		{ text: 'Past', id: 'isSetPast' }
				]
			},
			{   
				xtype: 'spacer',
				width: "30px"				    
			},
			
			{
				align: 'center',
				xtype: 'segmentedbutton',
				id: 'filterByIsUpcoming',
				flex: 1,

				layout: {
					pack: 'center'
				},

				defaults: {
		    		xtype: 'button',
		    		flex: 1
				},

				items: [
		    		{ text: 'All', id: 'isSetUpcomingAndAll' },
		    		{ text: 'Favorite', pressed: true, id: 'isSetUpcomingAndFavorite'  },
		    		{ text: 'Attending', id: 'isSetUpcomingAndAttending' }
				]
			},
			{
				align: 'center',
				xtype: 'segmentedbutton',
				id: 'filterByIsPast',
				hidden:true,
				flex: 1,

				layout: {
					pack: 'center'
				},

				defaults: {
		    		xtype: 'button',
		    		flex: 1
				},

				items: [
		    		{ text: 'All', id: 'isSetPastAndAll' },
		    		{ text: 'Favorite', id: 'isSetPastAndFavorite'  },
		    		{ text: 'Attended', pressed: true, id: 'isSetPastAndAttended' }
				]
			},
			{   
				xtype: 'spacer',
				width: "30px"
				    
			},
			{
				align: 'right',
				xtype: 'segmentedbutton',
				id: 'sortBySegBtn',
				flex: 0.5,

				layout: {
					pack: 'center'
				},

				defaults: {
		    		xtype: 'button',
		    		flex: 1
				},

				items: [
		    		{ text: 'Time', pressed: true },
		    		{ text: 'Dist' }
				]
			}
		]
	}
});
