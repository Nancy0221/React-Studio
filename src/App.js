import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0.0);

  function addtoCart(item) {
    setCartItems([...cartItems, item]);
  }
  function total(item) {
    setPrice(price + item.price);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map(
        (
          item,
          index // TODO: map bakeryData to BakeryItem components
        ) => (
          <BakeryItem item={item} addtoCart={addtoCart} total={total} />
          // <p>Bakery Item {index}</p> // replace with BakeryItem component
        )
      )}
      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cartItems.map((item, index) => (
          <div className="cart">
            <p>{item.name}</p>
            <p>:</p> &nbsp;
            <p>{item.price}</p>
          </div>
        ))}
        <h4>Total</h4>
        {Math.round(price * 100) / 100}
      </div>
    </div>
  );
}

export default App;
