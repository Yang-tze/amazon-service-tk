import React from 'react';

const ItemSizing = (props) => {
  const { sizing } = props;
  return (
    <div>
      <h4>
        Sizing:
      </h4>
      <div>
        <select>
          <option />
          {sizing.size.map(el => <option key={el}>{el}</option>)}
        </select>
        <a href="">
          Size Chart
        </a>
      </div>
    </div>
  );
};

export default ItemSizing;
