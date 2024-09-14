import Weather from "./Weather"

const Single = ({ filteredList, weather }) => {

    const singleCountry = filteredList.map(country =>
        <li key={country.name.common}>
            <h1> {country.name.common} </h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h4>languages:</h4>
            <ul>
                {Object.values(country.languages).map(lang =>
                    <li key={lang}>{lang}</li>
                )}
            </ul>
            <img src={country.flags.png}></img>
            <h3>Weather in {country.capital}</h3>
        </li>)

    return (
        <div>
            {singleCountry}
            <Weather weather={weather}/>
        </div>
    )
}

export default Single