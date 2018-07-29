import React from 'react';

const ItemSizing = (props) => {
  const { sizing, onClick } = props;
  return (
    <div className="options-size">
      <h4>
        Size:
      </h4>
      <div className="">
        <select>
          <option />
          {sizing.size.map(el => <option key={el}>{el}</option>)}
        </select>
        <a href="" onClick={onClick}>
          Size Chart
        </a>
      </div>
    </div>
  );
};

export default ItemSizing;
