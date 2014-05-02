'use strict';

define([
		'app',
		'apps/user/grid/grid_controller'
	],
	function(App) {
		App.module('User', function(User, App, Backbone, Marionette) {
			var Router = Marionette.AppRouter.extend({
				appRoutes: {
					'user': 'show_grid',
					'user/:id/update': 'show_update',
					'user/create': 'show_create'
				}
			});

			var API = {
				show_grid: function() {
					User.Grid.Controller.show();
				},
				show_update: function() {

				},
				show_create: function() {

				}
			};

			User.addInitializer(function() {
				new Router({ controller: API });
			});
		});
	}
);