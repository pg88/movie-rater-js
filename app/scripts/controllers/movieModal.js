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
  .controller('MovieModalEditorController', ['$scope', '$state', '$uibModalInstance', 'LocalStorageSrv', 'Movie', 'AllMovies', function ($scope, $state, $uibModalInstance, LocalStorageSrv, Movie, AllMovies) {
    $scope.thisMovie = angular.copy(Movie);
    $scope.allMovies = AllMovies;
    $scope.newActor = '';
    $scope.newGenre = '';
    //add new actor to movie
    $scope.addItem = function (type, newItem) {
      if (type == 'actor') {
        var newId = _.last($scope.thisMovie.actors);
        newId = newId.id + 1;
        $scope.thisMovie.actors.push({id: newId, name: newItem});
        //not allow dupes
        $scope.thisMovie.actors = _.uniq($scope.thisMovie.actors, 'id');
        $scope.newActor = '';
      } else {
        $scope.thisMovie.genre.push({name: newItem});
        $scope.thisMovie.genre = _.uniq($scope.thisMovie.genre);
        $scope.newGenre = '';
      }
    }
    $scope.removeItem = function (target, item) {
      return _.remove(target, item)
    }
    $scope.updateMovie = function (movie) {
      $uibModalInstance.close(movie);
    }
    $scope.closeModal = function () {
      $uibModalInstance.dismiss('cancel');
    }
  }]);
