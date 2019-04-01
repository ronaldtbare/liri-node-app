// Program Name: Liri
var fs = require("fs");
var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");

var axios = require('axios');
var command = process.argv[2];
var searchVariable = process.argv.slice(3).join(" ");


switch(command) {
    case "concert-this":
      // code block
      // node liri.js concert-this <artist/band name here>
      // This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

      // Name of the venue
      // Venue location
      // Date of the Event (use moment to format this as "MM/DD/YYYY")
      console.log(searchVariable);
      
      break;
    case "spotify-this-song":
    // node liri.js spotify-this-song '<song name here>'
    // This will show the following information about the song in your terminal/bash window
    
    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from
    // If no song is provided then your program will default to "The Sign" by Ace of Base.
    // You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
    // The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
    // Step One: Visit https://developer.spotify.com/my-applications/#!/
    // Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
    // Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
    // Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.
    
 
    var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
    });
 
    spotify
      .search({ type: 'track', query: searchVariable, limit: 1 })
      .then(function(response) {
        console.log("This testy " +searchVariable+JSON.stringify(response,null,2));
        console.log(response.tracks.name);
        console.log(response.data.artist);
      })
      
      .catch(function(error) {
        console.log(error);
      });

      // console.log(searchVariable);
      break;

    case "movie-this":
      // code block
      // node liri.js movie-this '<movie name here>'
      // This will output the following information to your terminal/bash window:
      //   * Title of the movie.
      //   * Year the movie came out.
      //   * IMDB Rating of the movie.
      //   * Rotten Tomatoes Rating of the movie.
      //   * Country where the movie was produced.
      //   * Language of the movie.
      //   * Plot of the movie.
      //   * Actors in the movie.
      // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
      
      var hline = "\n---------------------------------------\n";
     
      axios.get('http://www.omdbapi.com/?apikey=1e94c9e5&t='+searchVariable)
        .then(function (response) {
          console.log(hline);
          console.log(response.data.Title);
          console.log("Realeased: "+response.data.Year);
          console.log("IMDB Rating: "+response.data.imdbRating);
          console.log(response.data.Ratings[1].Source+": "+response.data.Ratings[1].Value);
          console.log("Production Country: "+response.data.Country);
          console.log("Languages: "+response.data.Language);
          console.log("Plot: "+response.data.Plot);
          console.log("Actors: "+response.data.Actors);
          console.log(hline);
        
        })
        .catch(function (error) {
          console.log("Try again."+error);
        });
      
      break;
    case "do-what-it-says":
      // code block
      // node liri.js do-what-it-says
      // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
      // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
      // Edit the text in random.txt to test out the feature for movie-this and concert-this.
      console.log(searchVariable);
      break;
     
    default:
      // code block
      console.log("Try again.")
  }
