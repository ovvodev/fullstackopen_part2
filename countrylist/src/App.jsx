import { useState , useEffect } from 'react'
import countryService from "./services/countries"
import Search from './components/Search'
import Countries from './components/Countries'
import Country from "./components/Country"
import Weather from './components/Weather'


const App = () => {
  const [countries , setCountries] = useState([]);
  const [message, setMessage] = useState(null)
  const [searchedCountry , setSearchedCountry] = useState("")
  const [weather , setWeather] = useState([])
  


 
  /*useEffect(() => {
    countryService
      .getAll()
      .then(initialCounties => {
        setCountries(initialCounties)
        
      })
  }, [])*/


  const handleCountry = async (event) => {
    const value = event.target.value;
    setSearchedCountry(value);
  
    try {
      const allCountries = await countryService.getAll();

      if(value === ""){
        setCountries([])
        setMessage(null)
      }else {
        const filteredCountries = allCountries.filter(country =>
           country.name.common.toLowerCase().includes(value.toLowerCase())
        );
        if(filteredCountries.length > 10){
          setMessage("Too many matches, specify another filter")
          setCountries([])
        } else {
          setCountries(filteredCountries)
          setMessage(null)
        }
      }
      
      
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  
  const handleShowMore = (name) => {
    console.log(name);
    countryService.findCountry(name)
      .then((detailedCountry) => {
        console.log(detailedCountry);
        setCountries([detailedCountry]);
        handleWeather(detailedCountry);
      })
      .catch((error) => {
        console.error('Error fetching detailed country:', error);
      });
  };

  const api_key = import.meta.env.VITE_SOME_KEY
  const handleWeather = (detailedCountry) => {
      const lat = detailedCountry.latlng[0];
      const lon = detailedCountry.latlng[1];
      console.log(lat,lon, api_key)
      countryService.getWeather(lat, lon, api_key)
        .then((weather) => {
          setWeather([weather]);
          console.log(weather)
        })
  }
  
  return (
    <div>
      < Search countryName = {searchedCountry} handleCountry={handleCountry} />
      
      <Countries countries={countries} message={message} showMore={handleShowMore}/>
      {countries.length === 1 && (
        <Country country={countries[0]}/>
        
      )}
      <Weather weather={weather} loadWeather={handleWeather}/>
    </div>
        
  )
}

export default App
