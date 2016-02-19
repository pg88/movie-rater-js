'use strict';

/**
 * @ngdoc function
 * @name movieRaterJsApp.controller:MovieDetailController
 * @description
 * # MovieDetailController
 * Controller of the movieRaterJsApp
 */
angular.module('movieRaterJsApp')
  .controller('MovieDetailController', ['$scope', '$state', '$timeout', '$uibModal', 'LocalStorageSrv', function ($scope, $state, $timeout, $uibModal, LocalStorageSrv) {
    //vars
    $scope.max = 10;
    $scope.overStar = 0;
    $scope.currentMovie = {};
    $scope.isReadonly = false;
    $scope.isRated = false;

    $scope.retrieveMovieData = function (movie) {
      return $scope.currentMovie = movie;
    };
    $scope.actorDetail = function (movie, actor) {
      $state.go('actor', {actorId: actor.id});
    }
    $scope.retrieveMovieData(LocalStorageSrv.get('movie'))

    $scope.hoveringOver = function (value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
    $scope.updateMovies = function (target, newMovie) {
      _.forEach(target, function (movie) {
        if (movie.id == newMovie.id) {
          movie = newMovie;
        }
      });
      LocalStorageSrv.put('allMovies', target);
    }
    $scope.saveRating = function (currentMovie, value) {
      //search current movie
      var updatedMovie = _.findWhere($scope.allMovies, {id: currentMovie.id});
      //add my new rating
      updatedMovie.myRating = value;
      //update movie on storage array
      $scope.updateMovies($scope.allMovies, updatedMovie);


      $scope.myRating = value;
      $scope.showRater = false;
    }


    //vars values
    $scope.allMovies = LocalStorageSrv.get('allMovies');
    $scope.myRating = $scope.currentMovie.myRating ? _.result(_.findWhere($scope.allMovies, {id: $scope.currentMovie.id}), 'myRating') : 0;
    $scope.showRater = $scope.myRating > 0 ? true : false;
    $scope.isRated = $scope.myRating > 0 ? true : false
    if ($scope.showRater && $scope.isRated) {
      $scope.showRater = false;
    }
    ;


    //call modal for edit
    $scope.open = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/editMovie.html',
        controller: 'MovieModalEditorController',
        size: 'lg',
        resolve: {
          Movie: function () {
            return $scope.currentMovie;
          },
          AllMovies: function () {
            return $scope.allMovies
          }
        }
      });
      //close and update modal
      modalInstance.result.then(function (editedMovie) {
        var whichToEdit = _.findIndex($scope.allMovies, {id: editedMovie.id});
        $scope.currentMovie = editedMovie;
        LocalStorageSrv.put('movie', $scope.currentMovie);
        $scope.allMovies[whichToEdit] = editedMovie;
        LocalStorageSrv.put('allMovies', $scope.allMovies);
      }, function () {

      });
    };

    $scope.connectedMovies=[];
    $scope.showConnections=function(thisMovie,allMovies){
      _.forEach(thisMovie.genre,function(genre){
        _.forEach(allMovies,function(movie){
          _.forEach(movie.genre,function(genreLi){
            if(genre.name==genreLi.name){
              $scope.connectedMovies.push(movie);
            }
          })
        })
      })
    };
    $scope.cleanConnections=function(){
      $scope.connectedMovies = _.uniq($scope.connectedMovies,'id');
    }
    $scope.showConnections($scope.currentMovie, $scope.allMovies);
    $scope.cleanConnections();
    $scope.newMovie=function(movie){
      //saves the current movie on storage
      LocalStorageSrv.put('movie', movie);
      //redirects to movie details
      $state.go('movie', {movieId: movie.id});
    }

  }]);
