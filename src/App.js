
import './App.css';
import CityInput from './components/CityInput/index'
import React, {useState} from 'react'
import axios from 'axios'

function App() {
  
  const[city, setCity] = useState("")
  const[cityWeather, setCityWeather] = useState({})
  const fetchCityWeather = ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efe12308b4f6e71856f34c0d7c135f7b`,
    
    )
    .then((res)=>res.json())
    .then((result)=>{
      setCityWeather(result)
    
    }).catch((error) => console.log('error is ',error))
  }
  return (
    <>
    <div className="text-center mt-3">
      <CityInput 
      city={city} 
      setCity={setCity} 
      fetchCityWeather={fetchCityWeather}/>
    </div>
    {cityWeather.main && (
      <div className="city text-center mt-2">
        <h2 className="city-name">
          <span>{cityWeather.name}-</span>
          <span>({cityWeather.sys.country})</span>
        </h2>
        <div className="city-temp">
          {(Math.round(cityWeather.main.temp)-273)}
          <sup>&deg;C</sup>
        </div>
        <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt={cityWeather.weather[0].description} />
            <p>{cityWeather.weather[0].description}</p>
        </div>
      </div>
    )}
    </>
  );
}

export default App;
