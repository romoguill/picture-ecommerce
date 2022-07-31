import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, setCartItems } = useContext(Context);
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setIsProcessing(true);
    setTimeout(() => {
      setCartItems([]);
      setIsProcessing(false);
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:
        {(cartItemElements.length * 5.99).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
      <div className="order-button">
        <button onClick={placeOrder}>
          {isProcessing ? 'Ordering...' : 'Place Order'}
        </button>
      </div>
    </main>
  );
}

export default Cart;
