const Persons = ({persons, searchTerm, deletePerson}) => {
    const filteredList = persons.filter(person => person.name.toLowerCase().includes(searchTerm))
    const filteredPersonList = filteredList.map(person =>
      <div key={person.id}>
        <p>{person.name} {person.number}</p> 
        <button onClick={() => deletePerson(person.id, person.name)}>Delete {person.name}</button>
      </div>)
  
    return(
      <div>
        {filteredPersonList}
      </div>
    )
  }

export default Persons