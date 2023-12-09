import "./product.css";
import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../../App";

const Productcard = (props) => {
  const { product } = props;
  const { cartItems, addToCart, removeFromCart, updatetotal } = useContext(Appcontext);
  const [count, setCount] = useState(1);
  const [subtotal, setSubtotal] = useState(product.price);

  const addingItemToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
  };

  function increaseQuantity() {
    setCount((count) => (count += 1));
  }

  function decreaseQuantity() {
    setCount((count) => (count -= 1));
  }
  const removingItemFromCart = (item) => {
    removeFromCart(item);
  };

  useEffect(() => {
    setSubtotal((subtotal) => product.price * count);
    updatetotal(product, count);
  }, [count]);

  return (
    <div className="product-container">
      <h2>Product name: {product.title}</h2>
      <div>
        <img
          className="product-image"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      {/* <h3>Description: {product.description}</h3> */}
      <h3>Price: {product.price}</h3>
      <h3>Brand:{product.brand}</h3>
      <h5>Rating: {product.rating}</h5>
      <div className="quantityCount">
        Quantity:
        <button onClick={decreaseQuantity}>-</button>
        <span>{count}</span>
        <button onClick={increaseQuantity}>+</button>
        {/* <div
          className="cartRemove"
          onClick={() => removingItemFromCart(product)}
        >
          Remove
        </div> */}
      </div>
      <div className="subTotal">Subtotal: Rs.{subtotal}</div>
      <div className="button-container">
        {cartItems.some((item) => item.id === product.id) ? (
          <div
            className="remove-from-cart"
            onClick={() => removingItemFromCart(product)}
         
            >Remove from cart
          </div>
        ) : (
          <div
            className="add-to-cart"
            onClick={() => addingItemToCart(product)}
          >
            Add to cart
          </div>
        )}
      </div>
     
      </div>
    
  );
};

export default Productcard;
