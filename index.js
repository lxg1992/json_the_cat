const {fetchBreedDescription} = require('./breedFetcher');




const search = process.argv.slice(2)[0];

fetchBreedDescription(search,(error, desc) => {
  if (error) {
    console.log("ERROR: ", error);
  } else {
    console.log("Success");
    return desc;
  }
});
