import React from 'react';

const ListOfItems = props => (
  <ul>
    {props.termlist.map((term, index) => (
      <li key={index}>
        {term} <button onClick={() => props.handleDelete(index)}>X</button>
      </li>
    ))}
  </ul>
);

export default ListOfItems;
