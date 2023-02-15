//params: // Variables
let appid = 'ce02baa3a12a5fb92879d74991101fd8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let zip = '';

//console.log(axios.get(url));
// let options = {
//   baseURL: BASE_URL,
//   params: {
//     zip: zip,
//     apiKey: appid,
//   }
// }
axios.get(BASE_URL + '40356,us&appid=ce02baa3a12a5fb92879d74991101fd8')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 