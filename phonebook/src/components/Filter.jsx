import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <p>
        Filter shown with{' '}
        <input value={props.searchAll} onChange={props.handleSearch} />
      </p>
    </div>
  );
};

export default Filter;