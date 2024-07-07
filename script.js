const apiKey = '307f28847eab14a3f40468985451cf32'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`


const searchBox = document.getElementById('search-input')
const searchButton = document.getElementById('search-btn')
const weatherIcon = document.getElementById('weather-icon')

const themeToggle = document.getElementById('theme-button')
const themeIcon = document.getElementById('themeIcon')
const card = document.querySelector('.card')

async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
    var data = await response.json()
    // console.log(data)

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.error').style.color = "#ffffff"
        
    }else if (!cityName){
         document.querySelector('.error').style.display = "block"
         document.querySelector('.error').style.color = "#ffffff"
    }
    else{
        document.querySelector('.error').style.display = "none"
        document.getElementById('city-heading').innerHTML = data.name;
        document.getElementById('temperature-heading').innerHTML = `${Math.round(data.main.temp)}°C` ;
        document.getElementById('humid').innerHTML = data.main.humidity + '%' ;
        document.getElementById('wind').innerHTML = data.wind.speed + 'km/h' ;
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = './images/cloudy-removebg-preview (1).png'
        }
        if(data.weather[0].main == 'Clear'){
            weatherIcon.src = './images/clear.png'
        }
        if(data.weather[0].main == 'Rain'){
            weatherIcon.src = './images/rain.png'
        }
        if(data.weather[0].main == 'Drizzel'){
            weatherIcon.src = './images/drizzel.png'
        }
        if(data.weather[0].main == 'Mist'){
            weatherIcon.src = './images/drizzel.png'
        }
        if(data.weather[0].main == 'Snow'){
            weatherIcon.src = './images/snow.png'
        }
    }

  
    

}


searchButton.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})


let flag = 0;


themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode')
    card.classList.toggle('dark-mode')
    if(flag == 0){
    themeIcon.src = "./images/brightness-high.svg"
    flag =1
    }else if(flag == 1){
        themeIcon.src = "./images/moon.svg"
        flag = 0
    }



       
   
})




