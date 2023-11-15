import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber , setNewNumber] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if(persons.filter((person) => JSON.stringify(person.name) === JSON.stringify(personObject.name)).length > 0 ){
      alert(`${personObject.name} is already in the phonebook`)
    }else{
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
    
  }
  const handleNewName = (event) => {
    setNewName(event.target.value);
    
  }
 const handleNewNumber = (event) => {
  setNewNumber(event.target.value);
 }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
         <p>name: <input value={newName} onChange={handleNewName}/></p> 
          <p>number: <input  value={newNumber} onChange={handleNewNumber}/></p>
        </div>
        <div>debug: {newName} {newNumber}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}


export default App