'use strict';

define([
		'app',
		'base/controllers/page_controller',
		'collections/users',
		'apps/user/grid/grid_view'
	],
	function(App, PageController, Users, GridView) {
		App.module('User.Grid', function(Grid) {
			Grid.Controller = new PageController({
				title: 'users',
				onShow: function(page) {
					var users = new Users();
					var defer = users.fetch();

					defer.done(function() {
						var view = new GridView({
							collection: users
						});

						page.show(view);
					});

					return defer;
				}
			});
		});
	}
);