import axios from "axios"
import { useEffect } from "react"
import Single from "./Single"

const Country = ({ countries, searchText, setSearchText, selectedCountry, setSelectedCountry, weather, apiKey, setWeather }) => {
    const filteredList = countries.filter(country => country.name.common.toLowerCase().includes(searchText))

    const filteredCountryList = filteredList.map(country =>
        <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => setSearchText(country.name.common.toLowerCase())}>show</button>
        </li>)

    useEffect(() => {
        if (searchText.length > 0) {
            // console.log(searchText.length);
            const lon = filteredList[0].capitalInfo.latlng[1]
            const lat = filteredList[0].capitalInfo.latlng[0]
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                .then(response => {
                    setWeather(response.data)
                    console.log(response.data);
                })
        }
    }, [selectedCountry])

    useEffect(() => {
        if (filteredList.length === 1 && filteredList[0].name.common !== selectedCountry) {
            setSelectedCountry(filteredList[0].name.common);
        }
    }, [filteredList]);

    if (filteredCountryList.length == 1) {
        return (
            <div>
                <Single filteredList={filteredList} weather={weather} />
            </div>
        )
    }

    if (filteredCountryList.length <= 10) {
        return (
            <div>
                {filteredCountryList}
            </div>
        )
    } else {
        return (
            <div>
                Too many results
            </div>
        )
    }

}

export default Country