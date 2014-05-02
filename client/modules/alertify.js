'use strict';

define([
		'app',
		'alertify'
	],
	function(App, alertify) {
		App.module('Notification', function(Notification, App) {
		    App.on('notify:error', function(msg) {
				alertify.error(msg);
			});

			App.on('notify:info', function(msg) {
				alertify.log(msg);
			});

			App.on('notify:success', function(msg){
		   		alertify.success(msg);
			});
		});
	}
);