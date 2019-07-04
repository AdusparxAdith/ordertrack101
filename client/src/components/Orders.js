import React from "react";
import Order from "./Order";
const Orders = ({ orders }) => {
  return (
    <div>
      <center>
        <p>{orders.length} Orders</p>
      </center>
      {orders.map((order, i) => (
        <div className="container orderList" key={order._id}>
          <Order order={order} number={i} />
        </div>
      ))}
    </div>
  );
};

export default Orders;
