import "./CO.css";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const CO = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state || JSON.parse(localStorage.getItem("product"));
  const [size, setSize] = useState("small");

  if (!product) {
    return <p className="error-message">Tidak ada produk yang dipilih.</p>;
  }

  const handleBuy = () => {
    const price = size === "small" ? 7000 : 9000;
    alert(`Pembelian Berhasil! Anda membeli ${product.name} ukuran ${size.toUpperCase()} seharga Rp ${price}.`);
  };

  return (
    <div className="checkout-container">
    
      <div className="checkout-content">
        <img src={product.image} alt={product.name} className="checkout-image" />
        <div className="checkout-details">
          <h2 className="checkout-product-name">{product.name}</h2>
          <p className="checkout-description">Nikmati teh Nusantara yang autentik.</p>
          <div className="size-options">
  <div
    className={`size-option ${size === "small" ? "selected" : ""}`}
    onClick={() => setSize("small")}
  >
    Small - Rp 7.000
  </div>
  <div
    className={`size-option ${size === "big" ? "selected" : ""}`}
    onClick={() => setSize("big")}
  >
    Big - Rp 9.000
  </div>
</div>

          <button className="checkout-button" onClick={handleBuy}>Beli Sekarang</button>
          <button className="back-button" onClick={() => navigate(-1)}>Kembali</button>
        </div>
      </div>
    </div>
  );
};
