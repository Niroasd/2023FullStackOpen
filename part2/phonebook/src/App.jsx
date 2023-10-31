import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Personform from './components/Personform'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response);
        setPersons(response.data)
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
        axios
          .post('http://localhost:3001/persons', personObject)
          .then(response => console.log(response.data))
          .then(response => setPersons(persons.concat(response.data)))
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