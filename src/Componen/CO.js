
import "./CO.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CO = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product) {
    return <p className="error-message">Tidak ada produk yang dipilih.</p>;
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-content">
        <img src={product.image} alt={product.name} className="checkout-image" />
        <div className="checkout-details">
          <h2 className="checkout-product-name">{product.name}</h2>
          <p className="checkout-description">Nikmati teh Nusantara yang autentik.</p>
          <button className="checkout-button">Beli Sekarang</button>
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};