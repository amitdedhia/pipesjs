'use strict';

define([
		'backbone',
		'backbone-pageable'
	],
	function(Backbone) {
		return Backbone.PageableCollection.extend({
			mode: 'server'
		});
	}
);