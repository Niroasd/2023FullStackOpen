import { useState } from 'react'

const Person = ({persons}) => {
  const personList = persons.map(person => <p key={person.name}>{person.name}</p>)
  return(
    <div>
      {personList}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) =>{
    setNewName(event.target.value)
  }



  const addName = (event) => {
    const nameList = persons.map(person => {
      return person.name
    })

    event.preventDefault()
    const personObject = {
      name : newName
    }

    if(!nameList.includes(newName)){
      setPersons(persons.concat(personObject))
      setNewName('')
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
          name: <input onChange={handleInputChange}/>
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons={persons}/>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App