const Country = ({countries, searchText}) => {
    const filteredList = countries.filter(country => country.name.common.toLowerCase().includes(searchText))
    const filteredCountryList = filteredList.map(country =>
      <li key={country.name.common}>
        {country.name.common}
      </li>)
  
    return(
      <div>
        {filteredCountryList}
      </div>
    )
}

export default Country