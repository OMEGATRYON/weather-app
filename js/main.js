//params: // Variables
let appid = 'ce02baa3a12a5fb92879d74991101fd8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let bfApp = '&appid=';
// hook zip up into a button to search for said zip code EX 40356 is nichvegas
let zip = [];
let data = [];

//put header in own div
  let weatherHead = document.createElement ('h1')
  weatherHead.innerText = 'Weather App Project';
  weatherHead.classList = "text-center"
  weatherHead.id = "header1";
  main.appendChild(weatherHead);

  const subButton = document.createElement ('button');
  subButton.innerText = 'Get Weather';
  subButton.classList = "";
  subButton.id = 'button-1';
  //Add empty box for typing zipcode
  main.appendChild(subButton);
   
let cityName = document.createElement ('div');
        cityName.id = "div1";
let cityTxt = document.createTextNode ('City');
let cityData = document.createElement ('p');
  //leave empty for city data
let citiTxt = document.createTextNode ('');
  //POSSIBLY NEED ID TO ADD DATA?
    citiTxt.id = "dataCity";
  cityName.appendChild(cityTxt);
  main.appendChild(cityName);
  cityData.appendChild(citiTxt);
  cityName.appendChild(cityData);

let Tempsec = document.createElement ('div');
            Tempsec.id = "div2";
let temptxt = document.createTextNode ('Temperature');
let tempData = document.createElement ('p');
let tempTextdata = document.createTextNode ('');
  //Possibly add temp info here from id
          tempTextdata.id = "tempinfo";
    main.appendChild(Tempsec);
    Tempsec.appendChild(temptxt);
    tempData.appendChild(tempTextdata);
    Tempsec.appendChild(tempData);

let condSec = document.createElement ('div');
      condSec.id = "div3";
let condTxt = document.createTextNode ('Condition');
let condData = document.createElement ('p');
let condTextData = document.createTextNode ('');
      condTextData.id = "conddata";
    main.appendChild(condSec);
    condSec.appendChild(condTxt);
    condData.appendChild(condTextData);
    condSec.appendChild(condData);

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