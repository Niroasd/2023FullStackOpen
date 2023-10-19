import { useState } from 'react'

const Persons = ({persons, searchTerm}) => {
  const filteredList = persons.filter(person => person.name.toLowerCase().includes(searchTerm))
  const filteredPersonList = filteredList.map(person => <p key={person.id}>{person.name} {person.number}</p>)

  return(
    <div>
      {filteredPersonList}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    const nameList = persons.map(person => {
      return person.name
    })

    event.preventDefault()
    const personObject = {
      name : newName,
      number : newNumber,
      id : persons.length + 1
    }

    if(!nameList.includes(newName)){
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } 
    else {
      alert(`${newName} is already added to phonebook.`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Search <input onChange={handleSearchInputChange} value={searchTerm}/>
        </div>
      </form>
      <h2>Add a person</h2>
      <form>
        <div>
          name: <input onChange={handleNameInputChange} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNumberInputChange} value={newNumber}/>
        </div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm}/>
      <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div>
      <div>debug search: {searchTerm}</div>
    </div>
  )
}

export default App