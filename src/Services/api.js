import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, { username, password });
    return response.data.token;
  } catch (error) {
    throw new Error('Invalid username/password');
  }
};

export const getItems = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
};

export const addToCart = async (userId, itemId, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/carts`,
      { userId, itemId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error adding item to cart');
  }
};

export const getCartItems = async (userId, token) => {
  try {
    const response = await axios.get(`${API_URL}/carts?userId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching cart items');
  }
};

export const convertToOrder = async (cartId, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/orders`,
      { cartId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error converting cart to order');
  }
};

export const getOrderHistory = async (userId, token) => {
  try {
    const response = await axios.get(`${API_URL}/orders?userId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching order history');
  }
};
