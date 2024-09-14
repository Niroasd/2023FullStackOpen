import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import axios from 'axios'
import Country from './components/Country'

function App() {
  const [countries, setCountries] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null)
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
        console.log(`Fetched`);
      })
  }, [])

  if (!countries) {
    return (<div>...</div>)
  }

  // if(!weather){
  //   return(
  //     <div>Fetching weather..</div>
  //   )
  // }

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase())
  }

  return (
    <>
      <Filter searchText={searchText} handleSearchChange={handleSearchChange} />
      <Country countries={countries} searchText={searchText} setSearchText={setSearchText} apiKey={apiKey} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} weather={weather} setWeather={setWeather}/>
    </>
  )
}

export default App
