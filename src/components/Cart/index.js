import React, { useContext } from 'react';
import LineItem from './LineItem';
import AppContext from '../../context/AppContext';

const Cart = () => {
  const { cart } = useContext(AppContext);

  return (
    <div>
      {cart.lineItems.map(item => (
        <LineItem key={item.id.toString()} item={item} />
      ))}
      <h2>Subtotal</h2>
      <p>$ {cart.subtotalPrice}</p>
      <br />
      <h2>Taxes</h2>
      <p>$ {cart.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p>$ {cart.totalPrice}</p>
      <br />
      <a href={cart.webUrl}>Check out</a>
    </div>
  );
};

export default Cart;
