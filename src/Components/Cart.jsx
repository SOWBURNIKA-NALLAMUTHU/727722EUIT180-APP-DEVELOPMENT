import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { ArrowBackIos } from "@mui/icons-material";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  const cartItems = Object.values(cart);

<<<<<<< HEAD
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleBackClick = () => {
    navigate("/petopia");
=======
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleBackClick = () => {
    navigate('/petopia');
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
  };

  const handleRemoveClick = (item) => {
    removeFromCart(item);
  };

  const handlePaymentClick = () => {
    const storedDetails = localStorage.getItem("userDetails");

    if (!storedDetails) {
<<<<<<< HEAD
      alert(
        "You are not signed in. Please sign in to proceed with the payment."
      );
    } else {
      navigate("/payment");
=======
      alert('You are not signed in. Please sign in to proceed with the payment.');
    } else {
      navigate('/payment');
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
    }
  };

  return (
    <div className="Cart">
      <video className="background-video" autoPlay muted loop>
        <source src="https://cdn.pixabay.com/video/2022/09/20/132000-751915339_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="navigation-arrows">
        <button className="arrow-button back-arrow" onClick={handleBackClick}>
          <ArrowBackIos fontSize="large" />
        </button>
      </div>
      <h1 className="cart-header">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-container">
          <div className="order-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Cost: Rs. {totalCost}</p>
          </div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
<<<<<<< HEAD
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
=======
                <img src={item.image} alt={item.name} className="cart-item-image" />
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Rs.{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
<<<<<<< HEAD
                <button
                  className="remove-button"
                  onClick={() => handleRemoveClick(item)}
                >
                  Remove
                </button>
=======
                <button className="remove-button" onClick={() => handleRemoveClick(item)}>Remove</button>
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
              </li>
            ))}
          </ul>
          <div className="cart-footer">
<<<<<<< HEAD
            <button className="payment-button" onClick={handlePaymentClick}>
              Proceed to Payment
            </button>
=======
            <button className="payment-button" onClick={handlePaymentClick}>Proceed to Payment</button>
>>>>>>> 25878366038e0948ccec78c42f66448fc5c77caa
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
