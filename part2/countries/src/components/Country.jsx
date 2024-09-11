const Country = ({ countries, searchText, setSearchText }) => {
    const filteredList = countries.filter(country => country.name.common.toLowerCase().includes(searchText))
    const filteredCountryList = filteredList.map(country =>
        <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => setSearchText(country.name.common.toLowerCase())}>show</button>
        </li>)

    const filteredCountrySingle = filteredList.map(country =>
        <li key={country.name.common}>
            <h1> {country.name.common} </h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {/* {console.log(`${country.languages}`)} */}
                {filteredCountryList.length == 1 ?
                    Object.values(country.languages).map(lang =>
                        <li key={lang}>{lang}</li>
                    )
                    : null
                }
            </ul>
            <img src={country.flags.png}></img>
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