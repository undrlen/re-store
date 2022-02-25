import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>50$</td>
            <td>
              <button className="btn btn-outline-danger">
                <i className="bi bi-trash"></i>
              </button>
              <button className="btn btn-outline-success">
                <i className="bi bi-plus-circle"></i>
              </button>
              <button className="btn btn-outline-warning">
                <i className="bi bi-dash-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">
        Total: $201
      </div>
    </div>
  );
};

export default ShoppingCartTable;
