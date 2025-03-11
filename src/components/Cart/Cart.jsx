import React, { useContext } from "react";
import { Shanta } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
export default function Cart() {
  const { cart, removeFromCart } = useContext(Shanta); // ✅ Use context function

  // Calculate total price dynamically
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);

  return (
    <div className="container mt-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>

      </Helmet>
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center p-3">
          <h4 className="text-muted">Your cart is empty</h4>
          <Link to="/home" className="btn btn-primary mt-3">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <ul className="list-group">
              {cart.map((product) => (
                <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={product.image} alt={product.title} className="cart-img me-3" />
                    <div>
                      <h5>{product.title}</h5>
                      <p className="text-muted">${product.price}</p>
                    </div>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card p-3 shadow">
              <h4>Order Summary</h4>
              <p className="text-muted">Total Items: {cart.length}</p>
              <h5>Total: ${totalPrice}</h5>
              <button className="btn btn-success w-100 mt-3">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .cart-img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }
        .list-group-item {
          border-radius: 10px;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 10px;
        }
        .card {
          border-radius: 15px;
          background: #f8f9fa;
        }
      `}</style>
    </div>
  );
}
