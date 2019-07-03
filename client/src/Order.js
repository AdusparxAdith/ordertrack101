import React from "react";
import Modal from "./components/Modal";
import Moment from "react-moment";

const Order = ({ order, number }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="badge">{number + 1}</span>Order ID: {order.name}
      </div>
      <div className="card-body">
        <h5>Contact Details: </h5>
        <hr />
        <p className="card-text">{order.customer.email}</p>
        <p className="card-text">{order.customer.phone}</p>
        <h5>Purchased Items: </h5>
        <hr />
        <div className="card">
          <div className="card-body">
            <ul className="itemList">
              {order.line_items.map(item => (
                <li key={item.id}>
                  {item.name} X {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br />
        <h5>Billing Address: </h5>
        <hr />
        <div className="card">
          <div className="card-body address">
            <div className="container">
              <p>First name: {order.billing_address.first_name}</p>
              <p>Last name: {order.billing_address.last_name}</p>
              <p>City: {order.billing_address.city}</p>
              <p>Country: {order.billing_address.country}</p>
            </div>

            <div className="container">
              <p>Zip Code: {order.billing_address.zip}</p>
              <p>State: {order.billing_address.province}</p>
              <p>Address 1: {order.billing_address.address1}</p>
              <p>
                {order.billing_address.address2
                  ? `Address 2:   ${order.billing_address.address2}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <br />

        <Modal
          text={order.customer.email ? "Edit Email" : "Add email"}
          id={order._id}
        />
        <Modal
          text={order.customer.phone ? "Edit phone" : "Add phone"}
          id={order._id}
        />
      </div>
      <div className="card-footer text-muted">
        Ordered on:{" "}
        <Moment format="DD-MM-YYYY HH:mm">{order.created_at}</Moment>
        <p className="amountPaid">Amount paid: {order.total_price}</p>
      </div>
    </div>
  );
};

export default Order;
