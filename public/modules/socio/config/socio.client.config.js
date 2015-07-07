'use strict';

// Configuring the Articles module
angular.module('socio').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		//               (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position)
		Menus.addMenuItem('topbar', 'Socio', 'socio.app', 'item', 'socio');
	}
]);
