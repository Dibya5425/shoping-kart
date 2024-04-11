import React, { useState, useEffect } from 'react';
import { getOrderHistory } from '../Services/api';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const orders = await getOrderHistory(token);
        setOrders(orders);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>Order ID: {order.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Order;