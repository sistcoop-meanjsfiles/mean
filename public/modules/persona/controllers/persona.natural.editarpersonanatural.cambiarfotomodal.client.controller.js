'use strict';

/* jshint -W098 */
angular.module('persona').controller('Persona.Natural.EditarPersonaNatural.CambiarFotoModalController',
	function ($scope, $modalInstance, FileUploader, personaNatural) {

		$scope.persona = personaNatural;
		$scope.uploader = new FileUploader();

		$scope.ok = function () {
			alert('cerrando');
			$modalInstance.close($scope.selected.item);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	});