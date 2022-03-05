import React from "react";
import { connect } from "react-redux";
import "./shopping-cart-table.css";
import {
  bookDeletedToCart,
  bookPlusToCart,
  bookMinusToCart,
} from "../../actions";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={idx}>
        <th>{idx + 1}</th>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger"
          >
            <i className="bi bi-trash"></i>
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success"
          >
            <i className="bi bi-plus-circle"></i>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning"
          >
            <i className="bi bi-dash-circle"></i>
          </button>
        </td>
      </tr>
    );
  };

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
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookPlusToCart,
  onDecrease: bookMinusToCart,
  onDelete: bookDeletedToCart,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrease: (id) => {
//       dispatch(bookPlusToCart(id));
//     },
//     onDecrease: (id) => {
//       dispatch(bookMinusToCart(id));
//     },
//     onDelete: (id) => {
//       dispatch(bookDeletedToCart(id));
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
