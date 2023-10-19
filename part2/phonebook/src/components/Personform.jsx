const Personform = ({handleNameInputChange, handleNumberInputChange, newName, newNumber, addPerson}) => {
    return(
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
    )
  }

export default Personform