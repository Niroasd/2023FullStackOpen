import axios from "axios"

const Country = ({ countries, searchText, setSearchText, selectedCountry, setSelectedCountry, apiKey }) => {
    const filteredList = countries.filter(country => country.name.common.toLowerCase().includes(searchText))
    const filteredCountryList = filteredList.map(country =>
        <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => clickHandler(country.name.common.toLowerCase())}>show</button>
        </li>)


    const clickHandler = (name) => {
        setSearchText(name)
        setSelectedCountry(name)
    }


    const filteredCountrySingle = filteredList.map(country =>
        <li key={country.name.common}>
            <h1> {country.name.common} </h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h4>languages:</h4>
            <ul>
                {filteredCountryList.length == 1 ?
                    Object.values(country.languages).map(lang =>
                        <li key={lang}>{lang}</li>
                    )
                    : null
                }
            </ul>
            <img src={country.flags.png}></img>
            <h3>Weather in {country.name.common}</h3>
        </li>)


    if (filteredCountryList.length == 1) {
        return (
            <div>
                {filteredCountrySingle}
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