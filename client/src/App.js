import React, { useState, useEffect } from "react";
import NavBar from "./components/layout/NavBar";
import Orders from "./components/Orders";
import axios from "axios";
import "./App.css";

function App() {
  // State contains all orders from the DB
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const result = await axios.get(
      " https://ordertrack101.herokuapp.com/api/orders"
    );

    setOrders(result.data);
  };

  // Hook that calls getOrders on component Mount
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Orders orders={orders} />
    </div>
  );
}

export default App;
