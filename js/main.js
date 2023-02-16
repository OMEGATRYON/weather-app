//params: // Variables
let appid = 'ce02baa3a12a5fb92879d74991101fd8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let bfApp = '&appid=';
// hook zip up into a button to search for said zip code EX 40356 is nichvegas
let zip = '';
let data = []
// console.log(axios.get(url));
// let options = {
//   baseURL: BASE_URL,
//   params: {
//     zip: zip,
//     apiKey: appid,
//   }
// }
axios.get(BASE_URL + '40356,us' + bfApp + appid)
  .then(function (response) {
    console.log(response);
    data = response.data.results;
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 
  
  //from morty api, check and see if u can use it to paste data. 
  function createListItems(arr) {
    for (const joke of arr) {
        let listItem = document.createElement('li');
        listItem.innerText = `${joke.data}: ${joke.temp}`;
        document.getElementById('myList').appendChild(listItem);
    }
}
