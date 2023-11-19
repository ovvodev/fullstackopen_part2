import { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';


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
        <Filter handleSearch={handleSearch} searchAll={searchAll}/>
      <h3>Add a new</h3>
        <PersonForm addName={addName} newName={newName} handleNewName={handleNewName}  newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h3>Numbers</h3>
      <Persons searchFiltering={searchFiltering} />
    </div>
  )
}


export default App