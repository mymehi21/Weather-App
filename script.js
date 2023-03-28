var weatherContainer = document.getElementById('weather-container')
var searchbutton = document.getElementById('submit-btn')
window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=92c3758d1e00b16be72f1fe37cc5cb8d`;
          

           fetch(api)
           .then(response => {
               return response.json();
           }) //after I got the information, that meanns I could do something with the data 
           .then(data => {
               console.log(data);
               displayToday(data)
           })
        });
        //fetchweather(null,lat,long)
    }
  });
 
function fetchweather(city){
  console.log(city)
  
    const api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=92c3758d1e00b16be72f1fe37cc5cb8d`;

      

       fetch(api)
       .then(response => {
           return response.json();
       }) //after I got the information, that meanns I could do something with the data 
       .then(data => {
           console.log(data);
           displayToday(data)
       })
      }
searchbutton.addEventListener('click', function(event){
  event.preventDefault()
  var inputvalue = document.getElementById('city-input')
  console.log(inputvalue.value)
  fetchweather(inputvalue.value) 
})
function displayToday(data){
  weatherContainer.innerHTML=""
 var todaycontainer = document.createElement('div')
 todaycontainer.classList.add('card')
 var todayheader = document.createElement('div')
 todayheader.classList.add('card-header', 'text-center')
 todayheader.innerHTML = `${data.name}`
 var todaybody = document.createElement('div')
 todaybody.classList.add('card-body', 'text-center')
 todaybody.innerHTML = `<p>${data.main.temp}f</p>`
 
 todaycontainer.append(todayheader) //todayheader is an object that is being added to the end of the list.
 todaycontainer.append(todaybody) //todaybody is an object that is being added to the end of the list.
weatherContainer.append(todaycontainer) //todaycontainer is an object that is being added to the end of the list.

}