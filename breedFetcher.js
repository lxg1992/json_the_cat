const request = require('request');


let url =  `https://api.thecdatapi.com/v1/breeds/search?q=`;
let search = process.argv.slice(2)[0];


request(url + search, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  else if(body){
    if(JSON.parse(body).length < 1){
      console.log("No such breed");
    } else {
      console.log(JSON.parse(body)[0].description)          
    }
  }
});