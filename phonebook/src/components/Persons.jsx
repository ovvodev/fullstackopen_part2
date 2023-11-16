import React from 'react';

const Persons = (props) => {
  return (
    <div>
      <ul>
        {props.searchFiltering.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  );
};

export default Persons;