import React, { useState } from "react";

function Item({ name, category }) {
 const [isAdded, cartToggle] = useState(false);
//  console.log(isAdded);

 const cartState = isAdded ? "Remove From Cart" : "Add to Cart";
 const cartClass = isAdded ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => cartToggle(!isAdded)}>{cartState}</button>
    </li>
  );
}

export default Item;
