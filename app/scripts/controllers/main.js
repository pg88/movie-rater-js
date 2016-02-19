'use strict';

/**
 * @ngdoc function
 * @name movieRaterJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieRaterJsApp
 */
angular.module('movieRaterJsApp')
  .controller('MainController', ['$scope', '$state', 'LocalStorageSrv', function ($scope, $state, LocalStorageSrv) {

    $scope.seeMovieDetail = function (movie) {
      //saves the current movie on storage
      LocalStorageSrv.put('movie', movie);
      //redirects to movie details
      $state.go('movie', {movieId: movie.id});
    }
    $scope.saveAll = function (nameData, data) {
      LocalStorageSrv.put(nameData, data);
    }
    $scope.calculateRandom = function (gross) {
      if (gross) {
        return _.random(120000, 45000000);
      } else {
        return _.random(1960, 2015);
      }
    }
    var movieList = [
      {
        id: 1,
        title: 'The Godfather II',
        shortSynopsis: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
        score: 89,
        director: 'Francis Ford Coppola',
        releaseYear: $scope.calculateRandom(),
        grossIncome: $scope.calculateRandom(true),
        actors: [
          {id: 10, name: 'Marlon Brando', hasBio: true},
          {id: 11, name: 'Al Pacino', hasBio: false},
          {id: 12, name: 'James Caan', hasBio: false},
        ],
        genre: [
          {name: 'Crime'},
          {name: 'Drama'},
        ]
      },
      {
        id: 2,
        title: 'The Godfather',
        shortSynopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        score: 21,
        director: 'Francis Ford Coppola',
        releaseYear: $scope.calculateRandom(),
        grossIncome: $scope.calculateRandom(true),
        actors: [
          {id: 20, name: 'Robert De Niro', hasBio: false},
          {id: 21, name: 'Al Pacino', hasBio: false},
          {id: 22, name: 'Robert Duvall', hasBio: false},
        ],
        genre: [
          {name: 'Crime'},
          {name: 'Drama'},
        ]
      }, {
        id: 3,
        title: 'Saving Private Ryan',
        shortSynopsis: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
        score: 64,
        director: 'Steven Spielberg',
        releaseYear: $scope.calculateRandom(),
        grossIncome: $scope.calculateRandom(true),
        actors: [
          {id: 30, name: 'Matt Damon', hasBio: true},
          {id: 31, name: 'Tom Hanks', hasBio: false},
        ],
        genre: [
          {name: 'War'},
          {name: 'Drama'},
          {name: 'Action'},
        ]
      },
      {
        id: 4,
        title: 'The Butterfly Effect',
        shortSynopsis: 'A young man blocks out harmful memories of significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life.',
        score: 43,
        director: ' Eric Bress',
        releaseYear: $scope.calculateRandom(),
        grossIncome: $scope.calculateRandom(true),
        actors: [
          {id: 40, name: 'Ashton Kutcher', hasBio: true},
          {id: 41, name: 'Amy Smart', hasBio: false},
        ],
        genre: [
          {name: 'Sci-Fi'},
          {name: 'Thrill'},
        ]
      },
      {
        id: 5,
        title: 'Fight Club',
        shortSynopsis: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...',
        score: 21,
        director: 'David Fincher',
        releaseYear: $scope.calculateRandom(),
        grossIncome: $scope.calculateRandom(true),
        actors: [
          {id: 50, name: 'Bradd Pitt', hasBio: false},
          {id: 51, name: 'Edward Norton', hasBio: true},
        ],
        genre: [
          {name: 'Crime'},
          {name: 'Drama'},
          {name: 'Thrill'},
          {name: 'Action'},
        ]

      },
      {
        id: 6,
        title: 'Better Call Saul',
        shortSynopsis: 'The trials and tribulations of criminal lawyer, Saul Goodman, in the time leading up to establishing his strip-mall law office in Albuquerque, New Mexico.',
        score: 19,
        director: 'Vince Gilligan',
        releaseYear: $scope.calculateRandom(),
        grossIncome: $scope.calculateRandom(true),
        actors: [
          {id: 60, name: 'Bob Odenkirk', hasBio: false},
          {id: 61, name: 'Jonathan Banks', hasBio: false},
        ],
        genre: [
          {name: 'Crime'},
          {name: 'Drama'},
          {name: 'Action'},
        ]
      }, {
        id: 7,
        title: 'Street Fighter V',
        shortSynopsis: 'Col. Guile and various other martial arts heroes fight against the tyranny of Dictator M. Bison and his cohorts.',
        score: 17,
        director: 'Steven E. de Souza',
        releaseYear: $scope.calculateRandom(),
        grossIncome: $scope.calculateRandom(true),
        actors: [
          {id: 70, name: 'Jean-Claude Van Damme', hasBio: false},
          {id: 71, name: 'Ming-Na Wen', hasBio: true},
        ],
        genre: [
          {name: 'Adventure'},
          {name: 'Action'},
        ]
      }, {
        id: 8,
        title: 'Black adder',
        shortSynopsis: 'In the Middle Ages, Prince Edmund the Black Adder constantly schemes and endeavors to seize the crown from his father and brother.',
        score: 5,
        director: 'Martin Shardlow',
        releaseYear: $scope.calculateRandom(),
        grossIncome: $scope.calculateRandom(true),
        actors: [
          {id: 80, name: 'Rowan Atkinson', hasBio: false},
          {id: 81, name: 'Elspet Gray', hasBio: false},
        ],
        genre: [
          {name: 'Comedy'},
          {name: 'War'},
        ]
      }
    ];
    var actorList = [
      {
        actorId: 10,
        firstName: 'Marlon',
        lastName: 'Brando',
        gender: 'male',
        birthdate: '04/03/1924',
        bio: "Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem. Unlike Olivier, who preferred the stage to the screen, Brando concentrated his talents on movies after bidding the Broadway stage adieu in 1949, a decision for which he was severely criticized when his star began to dim in the 1960s and he was excoriated for squandering his talents. No actor ever exerted such a profound influence on succeeding generations of actors as did Brando. More than 50 years after he first scorched the screen as Stanley Kowalski in the movie version of Tennessee Williams' A Streetcar Named Desire (1951) and a quarter-century after his last great performance as Col. Kurtz in Francis Ford Coppola's Apocalypse Now (1979), all American actors are still being measured by the yardstick that was Brando. It was if the shadow of John Barrymore, the great American actor closest to Brando in terms of talent and stardom, dominated the acting field up until the 1970s. He did not, nor did any other actor so dominate the public's consciousness of what WAS an actor before or since Brando's 1951 on-screen portrayal of Stanley made him a cultural icon. Brando eclipsed the reputation of other great actors circa 1950, such as Paul Muni and Fredric March. Only the luster of Spencer Tracy's reputation hasn't dimmed when seen in the starlight thrown off by Brando. However, neither Tracy nor Olivier created an entire school of acting just by the force of his personality. Brando did.",
        movieList: [{movieId: 1}, {movieId: 2}]
      }, {
        actorId: 30,
        firstName: 'Matt',
        lastName: 'Damon',
        gender: 'male',
        birthdate: '10/8/1970',
        bio: "Matthew Paige Damon was born on October 8, 1970, in Boston Massachusetts, to Kent Damon, a stockbroker, realtor and tax preparer, and Nancy Carlsson-Paige, an early childhood education professor at Lesley University. Matt has an older brother named Kyle who is now a sculptor. His father is of English and Scottish descent, and his mother is of Finnish and Swedish ancestry. The family lived in Newton until his parents divorced in 1973, when Damon and his brother moved with his mother to Cambridge. He grew up in a stable community, and was raised near actor Ben Affleck.",
        movieList: [{movieId: 3}]
      }, {
        actorId: 40,
        firstName: 'Ashton',
        lastName: 'Kutcher',
        gender: 'male',
        birthdate: '02/07/1978 ',
        bio: "Christopher Ashton Kutcher was born on February 7, 1978 in Cedar Rapids, Iowa, to Diane (Finnegan), who was employed at Procter & Gamble, and Larry Kutcher, a factory worker. He has a fraternal twin brother, Michael, and a sister, Tausha. He is of Czech (father) and Irish, German, and Czech (mother) descent. He grew up in rural Homestead, Iowa, graduating from Clear Creek-Amana High School in Tiffin, Iowa. In 1997, Kutcher was a biochemical engineering student at the University of Iowa and was discovered by a local talent scout. In 2010, Kutcher was named one of Time Magazine's Top 100 Most Influential People. He created the Demi and Ashton Foundation, to eliminate child sex slavery worldwide. Kutcher is mostly known for playing Michael Kelso in That '70s Show (1998) and is co-founder of Katalyst, a studio for social media.",
        movieList: [{movieId: 4}]
      }, {
        actorId: 51,
        firstName: 'Edward',
        lastName: 'Norton',
        gender: 'male',
        birthdate: '08/18/1969',
        bio: "Edward Harrison Norton was born on August 18, 1969, in Boston, Massachusetts, and was raised in Columbia, Maryland.His mother, Lydia Robinson 'Robin' (Rouse), was a foundation executive and teacher of English, and a daughter of famed real estate developer James Rouse, who developed Columbia, MD; she passed away of brain cancer on March 6, 1997. His father, Edward Mower Norton, Jr., was an environmental lawyer and conservationist, who works for the National Trust for Historic Preservation. Edward has two younger siblings, James and Molly.",
        movieList: [{movieId: 5}]
      }, {
        actorId: 71,
        firstName: 'Ming-Na',
        lastName: 'Wen',
        gender: 'female',
        birthdate: '11/20/1963',
        bio: "Ming-Na ('enlightenment') was born on the island of Macau, forty miles from Hong Kong. Her mother, Lin Chan Wen, divorced her father when Ming-Na was only a toddler. She has an older brother named Jonathan. After the divorce, they moved to Hong Kong where her mother became a nurse. There her mother met Soo Lim Yee, a U.S. businessman. They soon married, and at four years, Ming-Na moved with her family to Queens, New York. Five years later, they transferred to Yee's hometown of Pittsburgh where his family runs the Chinatown Inn restaurant. Jonathan and half-brother, Leong, now manage this restaurant. Struggling to fit in at school, she changed her name to Maggie & Doris. She found a love for acting while appearing in a third grade Easter play, where she played a klutzy bunny.",
        movieList: [{movieId: 7}]
      }
    ]
    $scope.setData = function () {
      if (_.isUndefined(LocalStorageSrv.get('allMovies'))) {
        $scope.saveAll('allMovies', movieList);
        $scope.saveAll('allActors', actorList);
        $scope.movieList = LocalStorageSrv.get('allMovies');
        $scope.actorList = LocalStorageSrv.get('allActors');
        $state.go('home', {}, {reload: true});
      } else {
        $scope.movieList = LocalStorageSrv.get('allMovies');
        $scope.actorList = LocalStorageSrv.get('allActors');
      }
    }
    $scope.setData()
  }]);
