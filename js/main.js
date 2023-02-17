//params: // Variables
let appid = 'ce02baa3a12a5fb92879d74991101fd8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
let bfApp = '&appid=';
// hook zip up into a button to search for said zip code EX 40356 is nichvegas
let zipCode;
let data = [];
let Wthr = {
  city: "",
  conditions: "",
  temperature: "",
}


//put header in own div

let weatherHead = document.createElement ('h1')
        weatherHead.innerText = 'Weather App Project';
        weatherHead.classList = "text-center";
        weatherHead.style.color = "white";
        weatherHead.id = "header1";
      main.appendChild(weatherHead);
//add button AND input as well into same DIV
const btDiv = document.createElement ('div');
      btDiv.style.textAlign = "center";
const subButton = document.createElement ('button');
        subButton.innerText = 'Get Weather';
        subButton.id = 'button-1';
let input = document.createElement("input");
        input.id = 'zipCode';
        input.setAttribute("type", "text");
        subButton.appendChild(input);
  //Add empty box for typing zipcode````COMPLETED
    main.appendChild(btDiv);
    btDiv.appendChild(subButton);
  //Its own div with data for zip maybe? 


  let cityName = document.createElement ('div');
        cityName.id = "div1";
        cityName.classList = "text-center";
        cityName.style.border = "solid 2px"
        cityName.style.color = "white";
        cityName.style.marginTop = "15px";
        cityName.style.fontSize = "25px";
        cityName.style.height = "150px";


let cityTxt = document.createTextNode ('City:');
let cityData = document.createElement ('p');
        cityData.textContent = Wthr.city;
        cityData.style.fontSize = "40px";
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
         Tempsec.classList= "text-center";
         Tempsec.style.border = "solid 2px"
         Tempsec.style.color = "white";
         Tempsec.style.marginTop = "15px";
         Tempsec.style.fontSize = "25px";
         Tempsec.style.height = "150px";
let temptxt = document.createTextNode ('Temperature:');
let tempData = document.createElement ('p');
          tempData.textContent = Wthr.temperature;
          tempData.style.fontSize = "40px";
let tempTextdata = document.createTextNode ('');
  //Possibly add temp info here from id
          tempTextdata.id = "tempinfo";
          main.appendChild(Tempsec);
          Tempsec.appendChild(temptxt);
          tempData.appendChild(tempTextdata);
          Tempsec.appendChild(tempData);
//its own div


let condSec = document.createElement ('div');
          condSec.id = "div3";
          condSec.classList = "text-center";
          condSec.style.border = "solid 2px"
          condSec.style.color = "white";
          condSec.style.fontSize = "25px";
          condSec.style.marginTop = "15px";
          condSec.style.height = "150px";
let condTxt = document.createTextNode ('Condition:');
let condData = document.createElement ('p');
          condData.textContent = Wthr.conditions;
          condData.style.fontSize = "40px";
let condTextData = document.createTextNode ('');
          condTextData.id = "conddata";
      //practice plugging in to right slots, was hard
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


  function getData() {
    let options = {
        baseURL: BASE_URL,
        params: {
            appid: appid,
            //protip .value is important
            zip: document.getElementById('zipCode').value,
            //imperial cause MERICA
            units: 'imperial'
          }
    }
    //adding axios get to recieve the data
    axios.get('/weather', options)
      .then(function (response) {
        Wthr.city = response.data.name;
        Wthr.conditions = response.data.weather[0].description; 
        Wthr.temperature = Math.round(response.data.main.temp); 
        cityData.innerText = Wthr.city;
        condData.innerText = Wthr.conditions;
        tempData.innerText = Wthr.temperature + '°' + 'F';
      })

  } 

document.getElementById('button-1').addEventListener('click', getData);
///testing axios.get for real deal
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