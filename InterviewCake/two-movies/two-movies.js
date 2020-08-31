'use strict';

function twoMovies(flightLength, movieLengths) {
  //flightLength is an integer for the flight length in minutes; movieLengths is an array of integers for the movie lengths in minutes  

  for (let i = 0; i < movieLengths.length; i++) {
    for(let j = i + 1; j < movieLengths.length; j++) {
      if(movieLengths[i] + movieLengths[j] === flightLength) {
        return true;
      }
    }
  }

  return false;

}

function moreTwoMovies(flightLength, movieLengths) {

  let moviesChecked = new Set();

  for(let i = 0; i < movieLengths.length; i++) {
    let firstMovie = movieLengths[i];
    let matchingMovie = flightLength - firstMovie;

    if (moviesChecked.has(matchingMovie)) {
      return true;
    }
    moviesChecked.add(firstMovie);
  }

  return false;
}

module.exports = {
  twoMovies,
  moreTwoMovies,
}
