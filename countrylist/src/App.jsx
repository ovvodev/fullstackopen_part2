import { useState , useEffect } from 'react'
import countryService from "./services/countries"
import Search from './components/Search'
import Countries from './components/Countries'
import Country from "./components/Country"


const App = () => {
  const [countries , setCountries] = useState([]);
  const [message, setMessage] = useState(null)
  const [searchedCountry , setSearchedCountry] = useState("")
  


 
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

  

  return (
    <div>
      < Search countryName = {searchedCountry} handleCountry={handleCountry} />
      
      <Countries countries={countries} message={message} />
      {countries.length === 1 && (
        <Country country={countries[0]} />
      )}

    </div>
        
  )
}

export default App
