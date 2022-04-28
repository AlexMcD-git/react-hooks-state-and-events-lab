import React, { useState } from "react";

function Item({ name, category }) {
  const [cartClass, setCartClass] = useState("")
  function handlerCart(){
    setCartClass(cartClass=>cartClass?"":"in-cart")
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handlerCart}>{cartClass?"In Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
