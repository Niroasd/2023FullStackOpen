import { useState } from 'react'

const Person = ({persons}) => {
  const personList = persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
  return(
    <div>
      {personList}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      number : newNumber
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
      <Person persons={persons}/>
      <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div>
    </div>
  )
}

export default App