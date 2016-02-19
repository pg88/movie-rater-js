/**
 * Created by pablogarcia on 2/17/16.
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
  .controller('ActorDetailController',['$scope','$state', '$uibModal','LocalStorageSrv','Actor', function ($scope,$state,$uibModal,LocalStorageSrv,Actor) {
    $scope.actorID = Number(Actor);
    $scope.movieList = LocalStorageSrv.get('allMovies');
    $scope.actorList = LocalStorageSrv.get('allActors');

    $scope.getActorData=function(id){
      $scope.currentActor = _.findWhere($scope.actorList,{actorId: id});
      _.forEach($scope.currentActor.movieList,function(movie){
        movie.data= _.findWhere($scope.movieList,{id:movie.movieId});
      })
    }
    $scope.getActorData($scope.actorID);

    //call modal for edit
    $scope.open = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/editActor.html',
        controller: 'ActorModalEditorController',
        size: 'lg',
        resolve: {
          Actor: function () {
            return $scope.currentActor;
          }
        }
      });

      modalInstance.result.then(function (editedActor) {
        var whichToEdit = _.findIndex($scope.actorList,{actorId:editedActor.actorId});
        $scope.currentActor = editedActor;
        $scope.actorList[whichToEdit] = editedActor;
        LocalStorageSrv.put('allActors', $scope.actorList);
      }, function () {
        //close and update modal

      });
    };


  }]);
