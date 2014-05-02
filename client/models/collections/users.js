'use strict';

define([
		'backbone',
		'base/models/paged_collection',
		'models/user'
],
	function(Backbone, PagedCollection, User) {
		return PagedCollection.extend({
			url: User.prototype.urlRoot,
			model: User
		});
	}
);