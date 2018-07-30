import React from 'react';

const ItemDescription = (props) => {
  const { description } = props;
  return (
    <ul>
      {description.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
  );
};

export default ItemDescription;
