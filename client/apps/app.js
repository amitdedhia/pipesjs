'use strict';

define([
		'backbone',
		'marionette'
	],
	function(Backbone, Marionette) {
		var App = new Marionette.Application({
			vent: _.extend({}, Backbone.Events)
		});

		App.addInitializer(function() {
			if(Backbone.history) {
				Backbone.history.start();
			}
		});

		return App;
	}
);