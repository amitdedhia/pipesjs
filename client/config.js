'use strict';

require.config({
	baseUrl: 'client',

	paths: {
		'app': 'apps',
		'apps': 'apps',
		'components': 'components',
		'modules': 'modules',
		'models': 'models',
		'collections': 'models/collections',
		'base': 'base',
		'shared': 'shared',

		'alertify': 'vendor/bower/alertify/alertify.min',
		'backbone': 'vendor/bower/backbone/backbone',
		'backbone.babysitter': 'vendor/bower/backbone.babysitter/backbone.babysitter.min',
		'backbone-pageable': 'vendor/bower/backbone-pageable/lib/backbone-pageable.min',
		'backbone.fetch-cache': 'vendor/bower/backbone-fetch-cache/backbone.fetch-cache',
		'backbone.wreqr': 'vendor/bower/backbone.wreqr/lib/backbone.wreqr.min',
		'bootstrap': 'vendor/bower/bootstrap/dist/js/bootstrap.min',
		'jquery': 'vendor/bower/jquery/dist/jquery.min',
		'jquery.spinjs': 'vendor/bower/dist/jquery.spin.min',
		'marionette': 'vendor/bower/marionette/lib/core/amd/backbone.marionette.min',
		'spinjs': 'vendor/bower/spinjs/spin',
		'underscore': 'vendor/bower/underscore/underscore'
	},

	shim: {
		'alertify': {
			exports: 'alertify'
		},
		'backbone': {
			exports: 'backbone',
			deps: ['underscore', 'jquery']
		},
		'backbone-pageable': {
			deps: ['backbone']
		},
		'backbone.fetch-cache': {
			deps: ['backbone']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'jquery': {
			exports: '$'
		},
		'jquery.spinjs': {
			deps: ['spinjs', 'jquery']
		},
		'marionette': {
			exports: 'Marionette',
			deps: [
				'backone',
				'backbone.babysitter',
				'backbone.wreqr'
			]
		},
		'spinjs': {
			exports: 'Spinner'
		},
		'underscore': {
			exports: '_'
		}
	}
});