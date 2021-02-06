document.getElementById('submit').addEventListener("click", getData);
const key = 'cfb434c78e7f8bb9454fbd33a869c2a3';
function getData(){
    
    
    let cityName = document.getElementById('cityName').value;

    let fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`; 
    
    fetch(fetchURL)
    .then(response => response.json())
    .then(data => displayData(data));
}

function displayData(data){
    document.getElementsByClassName('weather-status')[0].style.display = "block";
    document.getElementById('city').textContent = data.name;
    document.getElementById('temp').textContent = data.main.temp;
    document.getElementById('desc').textContent = data.weather[0].main;
    document.getElementById('icon').src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
}
    