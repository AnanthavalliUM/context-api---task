import "./cart.css";

const Cart = (props) => {
  // JS LOGIC
  const { cartItems } = props;

  return (
    <div>
      {cartItems && cartItems.length ? (
        <div>
          <h1>Your cart has</h1>
          <div className="list-container">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <h2>Product: {item.title}</h2>
                <h3>Quantity: 1</h3>
                <h3>Price: {item.price}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>Empty Cart</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;