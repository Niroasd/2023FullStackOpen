import { useState } from 'react'
import Persons from './components/Persons'
import Personform from './components/Personform'
import Filter from './components/Filter'


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
      <Filter handleSearchInputChange={handleSearchInputChange} searchTerm={searchTerm}/>
      <h2>Add a person</h2>
      <Personform addPerson={addPerson} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm}/>
      {/* <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div>
      <div>debug search: {searchTerm}</div> */}
    </div>
  )
}

export default App