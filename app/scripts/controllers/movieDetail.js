'use strict';

/**
 * @ngdoc function
 * @name movieRaterJsApp.controller:MovieDetailController
 * @description
 * # MovieDetailController
 * Controller of the movieRaterJsApp
 */
angular.module('movieRaterJsApp')
  .controller('MovieDetailController',[ '$scope','$state','LocalStorageSrv',function ($scope,$state,LocalStorageSrv) {
    //vars
    $scope.max = 10;
    $scope.overStar=0;
    $scope.myRating=0;
    $scope.currentMovie={};
    $scope.isReadonly = false;
    $scope.showRater= false;

    $scope.retrieveMovieData=function(movie){
     return $scope.currentMovie =movie;
    };
    $scope.actorDetail=function(movie, actor){
      $state.go('actor',{actorId: actor.id});
    }
    $scope.retrieveMovieData(LocalStorageSrv.get('movie'))

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
    $scope.saveRating=function(value){
      $scope.myRating = value;
      $scope.showRater=false;
    }

    $scope.allMovies = LocalStorageSrv.get('allMovies');
    console.log(
     /* _.forEach($scope.allMovies,function(movie){
        _.findWhere(movie.genres,{name:$scope.currentMovie.genres[0].name})
      })*/
    )

  }]);
