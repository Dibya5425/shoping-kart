import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const ListItems = ({ token }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/items', {
          headers: {
            Authorization: token
          }
        });
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
        navigate('/'); // Navigate to login page on error
      }
    };
    
    if (token) {
      fetchItems();
    } else {
      navigate('/'); // Navigate to login page if user is not logged in
    }
  }, [token, navigate]);

  const handleAddToCart = async (itemId) => {
    try {
      await axios.post('/carts', { itemId }, { headers: { Authorization: token } });
      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;