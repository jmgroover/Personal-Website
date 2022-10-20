fetch('https://data.cdc.gov/resource/w9j2-ggv5.csv')
   .then(function (response) {
      return response.text();
   })
   .then(function (text) {
	csvToSeries(text);
   })
   .catch(function (error) {
      //Something went wrong
      console.log(error);
   });

function csvToSeries(text) {
   console.log(text);
}

// From: https://www.freecodecamp.org/news/how-to-make-your-first-javascript-chart/
