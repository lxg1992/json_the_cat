const request = require('request');


const URL =  `https://api.thecatapi.com/v1/breeds/search?q=`;


const fetchBreedDescription = function(breedName, callback) {
  request(URL + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      if(JSON.parse(body).length < 1){
        callback('ERROR: NO BREED FOUND',null);
      }
      callback(null,JSON.parse(body)[0].description.trim());
    }
  });
};

// request(url + search, (err, response, body) => {
//   if (err) {
//     console.log(err);
//   }
//   else if(body){
//     if(JSON.parse(body).length < 1){
//       console.log("No such breed");
//     } else {
//       console.log(JSON.parse(body)[0].description)
//     }
//   }
// });

module.exports = {fetchBreedDescription};