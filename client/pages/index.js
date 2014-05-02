'use strict';

require([
		'app',

		'modules/alertify'
	],
	function(App) {
		App.start({
			regions: {
				mainRegion: '#main-region'
			}
		});
	}
);