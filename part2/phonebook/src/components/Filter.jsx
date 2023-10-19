const Filter = ({handleSearchInputChange, searchTerm}) => {
    return(
      <form>
        <div>
          Search <input onChange={handleSearchInputChange} value={searchTerm}/>
        </div>
      </form>
    )
  }

export default Filter