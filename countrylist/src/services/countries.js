import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const countryUrl = "https://studies.cs.helsinki.fi/restcountries/api/name"

    const getAll = () => {
      const request = axios.get(baseUrl);
      return request.then(response => response.data);
    }
  

    const findCountry = (name) => {
      const request = axios.get(`${countryUrl}/${name}`)
      return request.then(response => response.data)
    }
    
    const getWeather = (lat, lon , apiKey) => {
      const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      return request.then(response => response.data)
    }
  
  
export default { getAll,  findCountry, getWeather}