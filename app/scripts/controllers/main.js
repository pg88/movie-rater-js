'use strict';

/**
 * @ngdoc function
 * @name movieRaterJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieRaterJsApp
 */
angular.module('movieRaterJsApp')
  .controller('MainController',['$scope','$state', 'LocalStorageSrv', function ($scope,$state,LocalStorageSrv) {

    $scope.seeMovieDetail=function(movie){
      //saves the current movie on storage
      LocalStorageSrv.put('movie',movie);
      //redirects to movie details
      $state.go('movie',{movieId:movie.id});
    }
    $scope.saveAllMovies=function(movieList){
      console.log(movieList);
      LocalStorageSrv.put('allMovies',movieList);
    }
    $scope.calculateRandom=function(gross){
      if(gross){
       return _.random(120000,45000000);
      }else{
        return _.random(1960, 2015);
      }
    }
    $scope.movieList = [
      {
        id: 1,
        title: 'The Godfather II',
        shortSynopsis: 'The story of the relationship between Karamakate, an Amazonian shaman and last survivor of his people, and two scientists who work together over the course of 40 years to search the Amazon for a sacred healing plant.',
        score: 89,
        releaseYear:$scope.calculateRandom(),
        grossIncome:$scope.calculateRandom(true),
        actors:[
          {id:10, name:'Marlon Brando'},
          {id:11, name:'Al Pacino'},
        ],
        genre:[
          {name:'Crime'},
          {name:'Drama'},
          {name:'Thrill'},
        ]
      },
      {
        id: 2,
        title: 'The Godfather',
        shortSynopsis: 'The story of the relationship between Karamakate, an Amazonian shaman and last survivor of his people, and two scientists who work together over the course of 40 years to search the Amazon for a sacred healing plant.',
        score: 21,
        releaseYear:$scope.calculateRandom(),
        grossIncome:$scope.calculateRandom(true),
        actors:[
          {id:20, name:'Marlon Brando'},
          {id:21, name:'Al Pacino'},
        ],
        genre:[
          {name:'Crime'},
          {name:'Drama'},
          {name:'Thrill'},
        ]
      }, {
        id: 3,
        title: 'Saving Private Ryan',
        shortSynopsis: 'The story of the relationship between Karamakate, an Amazonian shaman and last survivor of his people, and two scientists who work together over the course of 40 years to search the Amazon for a sacred healing plant.',
        score: 64,
        releaseYear:$scope.calculateRandom(),
        grossIncome:$scope.calculateRandom(true),
        actors:[
          {id:30, name:'Marlon Brando'},
          {id:31, name:'Al Pacino'},
        ],
        genre:[
          {name:'War'},
          {name:'Drama'},
          {name:'Thrill'},
        ]
      },
      {
        id: 4,
        title: 'The Butterfly Effect',
        shortSynopsis: 'The story of the relationship between Karamakate, an Amazonian shaman and last survivor of his people, and two scientists who work together over the course of 40 years to search the Amazon for a sacred healing plant.',
        score: 43,
        releaseYear:$scope.calculateRandom(),
        grossIncome:$scope.calculateRandom(true),
        actors:[
          {id:40, name:'Marlon Brando'},
          {id:41, name:'Al Pacino'},
        ],
        genre:[
          {name:'Drama'},
          {name:'Thrill'},
        ]
      },
      {
        id: 5,
        title: 'Fight Club',
        shortSynopsis: 'The story of the relationship between Karamakate, an Amazonian shaman and last survivor of his people, and two scientists who work together over the course of 40 years to search the Amazon for a sacred healing plant.',
        score: 21,
        releaseYear:$scope.calculateRandom(),
        grossIncome:$scope.calculateRandom(true),
        actors:[
          {id:50, name:'Marlon Brando'},
          {id:51, name:'Al Pacino'},
        ],
        genre:[
          {name:'Crime'},
          {name:'Drama'},
          {name:'Thrill'},
          {name:'Action'},
        ]

      },
      {
        id: 6,
        title: 'Better Call Saul',
        shortSynopsis: 'The story of the relationship between Karamakate, an Amazonian shaman and last survivor of his people, and two scientists who work together over the course of 40 years to search the Amazon for a sacred healing plant.',
        score: 19,
        releaseYear:$scope.calculateRandom(),
        grossIncome:$scope.calculateRandom(true),
        actors:[
          {id:60, name:'Marlon Brando'},
          {id:61, name:'Al Pacino'},
        ],
        genre:[
          {name:'Crime'},
          {name:'Drama'},
          {name:'Action'},
        ]
      }, {
        id: 7,
        title: 'Street Fighter V',
        shortSynopsis: 'The story of the relationship between Karamakate, an Amazonian shaman and last survivor of his people, and two scientists who work together over the course of 40 years to search the Amazon for a sacred healing plant.',
        score: 17,
        releaseYear:$scope.calculateRandom(),
        grossIncome:$scope.calculateRandom(true),
        actors:[
          {id:70, name:'Marlon Brando'},
          {id:71, name:'Al Pacino'},
        ],
        genre:[
          {name:'Adventure'},
          {name:'Drama'},
          {name:'Thrill'},
          {name:'Action'},
        ]
      }, {
        id: 8,
        title: 'Black adder',
        shortSynopsis: 'The story of the relationship between Karamakate, an Amazonian shaman and last survivor of his people, and two scientists who work together over the course of 40 years to search the Amazon for a sacred healing plant.',
        score: 5,
        releaseYear:$scope.calculateRandom(),
        grossIncome:$scope.calculateRandom(true),
        actors:[
          {id:80, name:'Marlon Brando'},
          {id:81, name:'Al Pacino'},
        ],
        genre:[
          {name:'Comedy'},
          {name:'War'},
        ]
      }
    ];


    $scope.saveAllMovies( $scope.movieList)
  }]);
