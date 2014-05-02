'use strict';

require([
		'app',

		'modules/alertify',

		'apps/user/user_app'
	],
	function(App) {
		App.start({
			regions: {
				mainRegion: '#main-region'
			}
		});
	}
);