const Filter = ({searchText, handleSearchChange}) => {
    return (
        <>
            <span>find countries</span>
            <input onChange={handleSearchChange} value={searchText}></input>
        </>
    )
}

export default Filter