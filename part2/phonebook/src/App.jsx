import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Personform from './components/Personform'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log(response);
        setPersons(response)
      })
  }, [])

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
      name: newName,
      number: newNumber,
    }

    if (!nameList.includes(newName)) {
      personService
        .addUser(personObject)
        .then((response) => {
          console.log(response)
          setPersons(persons.concat(response))
        })

      setErrorMessage(`Added ${newName}`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);

      setNewName('')
      setNewNumber('')
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {

        const foundPerson = persons.find(person => person.name === newName)
        const foundID = foundPerson.id

        personService
          .updateUser(foundID, personObject)
          .then((response) => {
            console.log(response)
            setPersons(persons.map(person =>
              person.id !== foundID ? person : response
            ));
          })

        setErrorMessage(`Updated ${newName}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);

        setNewName('')
        setNewNumber('')
      }
    }
  }

  const deletePerson = (id, userName) => {
    if (window.confirm(`Delete ${userName}?`)) {
      setPersons(persons.filter(person => person.id !== id));

      personService
        .deleteUser(id)
        .then((response) => {
          console.log(response)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter handleSearchInputChange={handleSearchInputChange} searchTerm={searchTerm} />
      <h2>Add a person</h2>
      <Personform addPerson={addPerson} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm} deletePerson={deletePerson} />
      <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div>
      <div>debug search: {searchTerm}</div>
    </div>
  )
}

export default App