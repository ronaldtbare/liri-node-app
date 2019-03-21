// Program Name: Liri

require("dotenv").config();
var keys = require("./keys.js");


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "79a265c66eae4881803d770729841faf",
  secret: "6b7a21e0446546328920501e012a7a0f"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

var command = process.argv[2];
var searchVariable = process.argv[3];


switch(command) {
    case "concert-this":
      // code block
      
      break;
    case "spotify-this-song":
      // code block
     
      break;
    case "movie-this":
      // code block
     
      break;
    case "do-what-it-says":
      // code block
      
      break;
     
    default:
      // code block
      console.log("Try again.")
  }
