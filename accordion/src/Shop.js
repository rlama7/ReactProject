import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fecthItems();
  }, []);

  const [items, setItems] = useState([]);

  const fecthItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

  return (
    <div>
      <h1>Welcome to Lama Store!</h1>
      <div>
          {items.map(item => (
            <h3 key={item.itemid}>
            <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
            </h3>
          ))}
      </div>
    </div>
  );
}

export default Shop;
