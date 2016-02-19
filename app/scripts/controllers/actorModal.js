/**
 * Created by pablogarcia on 2/18/16.
 */
'use strict';

/**
 * @ngdoc function
 * @name movieRaterJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieRaterJsApp
 */
angular.module('movieRaterJsApp')
  .controller('ActorModalEditorController', ['$scope', '$state', '$uibModalInstance', 'LocalStorageSrv', 'Actor', function ($scope, $state, $uibModalInstance, LocalStorageSrv, Actor) {
    $scope.thisActor = angular.copy(Actor);
    $scope.showDateMessage = false;

    $scope.updateActor = function (actor) {
      $uibModalInstance.close(actor);
    }
    $scope.closeModal = function () {
      $uibModalInstance.dismiss('cancel');
    }
  }])

