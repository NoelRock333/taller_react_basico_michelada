import React from 'react';

const Item = ({ item, index }) => {
  return (
    <li>
      <span>{item}</span>
      <input type="checkbox" />
    </li>
  )
}

export default Item;