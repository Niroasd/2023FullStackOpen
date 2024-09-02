const Persons = ({persons, searchTerm, deletePerson}) => {
    const filteredList = persons.filter(person => person.name.toLowerCase().includes(searchTerm))
    const filteredPersonList = filteredList.map(person =>
      <li key={person.id}>
        {person.name} {person.number}
        <button onClick={() => deletePerson(person.id, person.name)}>Delete {person.name}</button>
      </li>)
  
    return(
      <div>
        {filteredPersonList}
      </div>
    )
  }

export default Persons