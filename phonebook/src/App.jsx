import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber , setNewNumber ] = useState("");
  const [searchAll, setSearch] = useState("");


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNewName = (event) => {
    setNewName(event.target.value);
    
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }
    
  const handleSearch = (event) => {
      setSearch(event.target.value);

  }

  
  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: uuidv4(),
    }
    
    if(persons.filter((person) => JSON.stringify(person.name) === JSON.stringify(personObject.name)).length > 0 ){
      if (window.confirm(`${personObject.name} is already in the phonebook.Do you want to replace the old number with a new one`)){
        const currentPerson = persons.find(person => JSON.stringify(person.name) === JSON.stringify(personObject.name))
        personService
          .update(currentPerson.id , personObject)
          .then((updatedPerson) => {
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person));
            setNewName("");
            setNewNumber("");
          })
          .catch(error => {
            console.error('Error updating person:', error);
          });
      }else{
        setNewName("");
        setNewNumber("");
      }
    }else{
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewNumber("")
        })
        .catch(error => {
          console.error('Error updating person:', error);
        });
    }
    
  }

  const searchFiltering = searchAll === "" ? persons : persons.filter(person => person.name.toLowerCase().includes(searchAll.toLowerCase()));

  const deletePerson = (id) => {
    const person = persons.find(n => n.id === id);
    console.log(person)
    if(window.confirm(`Are you sure you want to delete ${person.name}?`)){
      personService
      .findForDelete(person.id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
      })
      .catch(error => {
        window.open('Error deleting person:', error);
      });
    }
   
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter handleSearch={handleSearch} searchAll={searchAll}/>
      <h3>Add a new</h3>
        <PersonForm addName={addName} newName={newName} handleNewName={handleNewName}  newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h3>Numbers</h3>
      <Persons searchFiltering={searchFiltering} deletePerson = {deletePerson}/>
    </div>
  )
}


export default App