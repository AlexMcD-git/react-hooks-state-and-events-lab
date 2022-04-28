import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [catFilter, setCatFilter] = useState("All")
  function handlerFilter(event){
    console.log(event.target.value)
    setCatFilter(event.target.value)
    console.log(catFilter)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handlerFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          catFilter==="All"?<Item key={item.id} name={item.name} category={item.category} />:catFilter===item.category?<Item key={item.id} name={item.name} category={item.category} />: null
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
