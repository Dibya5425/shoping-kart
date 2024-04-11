import React, { useState, useEffect } from 'react';
import { getCartItems } from '../Services/api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const items = await getCartItems(token);
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>Cart ID: {item.cart_id}, Item ID: {item.item_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
