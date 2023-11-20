import React from 'react';

const Persons = (props) => {
  return (
    <div>
      <ul>
        {props.searchFiltering.map(person => <li key={person.id}>{person.name} {person.number} <button onClick={() => props.deletePerson(person.id)}>Delete</button></li> )}
      </ul>
    </div>
  );
};

export default Persons;