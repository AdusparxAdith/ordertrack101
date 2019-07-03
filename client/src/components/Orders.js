import React from "react";

const Orders = ({ orders }) => {
  return (
    <div>
      {orders.map(order => (
        <p key={order._id}>order</p>
      ))}
    </div>
  );
};

export default Orders;
