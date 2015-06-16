'use strict';

/* jshint -W098 */
angular.module('cooperativa').controller('Cooperativa.Caja.EditarCajaController',
	function ($scope, $state, caja, SGDialog) {

		$scope.view = {
			caja: caja
		};

		$scope.desactivar = function () {

			SGDialog.confirm('Desactivar', 'Estas seguro de querer eliminar permanentemente la caja?', function () {
				alert('Metdo no implementado');
			});

		};

	});
