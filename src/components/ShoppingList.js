import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items);
  const [filterBy, setFilter] = useState("All");

  const filteredItems = items.filter((item) => {
    if (filterBy === "All") {
      return item;
    } else {
        return item.category === filterBy;
    }
  })

  function filterCategory(e) {
    setFilter(e.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
