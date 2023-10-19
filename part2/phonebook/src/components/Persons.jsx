const Persons = ({persons, searchTerm}) => {
    const filteredList = persons.filter(person => person.name.toLowerCase().includes(searchTerm))
    const filteredPersonList = filteredList.map(person => <p key={person.id}>{person.name} {person.number}</p>)
  
    return(
      <div>
        {filteredPersonList}
      </div>
    )
  }

export default Persons