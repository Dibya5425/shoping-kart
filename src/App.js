import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import ListItems from './Component/ListItems';
import Cart from './Component/Cart';
import Order from './Component/Order';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/list-items" element={<ListItems token={token} />} />
        <Route path="/cart" element={<Cart token={token} />} />
        <Route path="/orders" element={<Order token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;
