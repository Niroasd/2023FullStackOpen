import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Personform from './components/Personform'
import Filter from './components/Filter'
import personService from './services/persons'
// import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log(response);
        setPersons(response)
      })
    },[])



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
    }

    if(!nameList.includes(newName)){
        personService
          .addUser(personObject)
          .then((response) => {
            console.log(response)
            setPersons(persons.concat(response))
          })
      // setPersons(persons.concat(personObject))
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
      <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div>
      <div>debug search: {searchTerm}</div>
    </div>
  )
}

export default App