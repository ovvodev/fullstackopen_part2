import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber , setNewNumber ] = useState("");
  const [searchAll, setSearch] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length,
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
    
  const handleSearch = (event) => {
      setSearch(event.target.value);

  }

  const searchFiltering = searchAll === "" ? persons : persons.filter(person => person.name.toLowerCase().includes(searchAll.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
        <p>Filter shown with <input value={searchAll} onChange={handleSearch} /></p>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
         <p>name: <input value={newName} onChange={handleNewName}/></p> 
          <p>number: <input  value={newNumber} onChange={handleNewNumber}/></p>
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {searchFiltering.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}


export default App