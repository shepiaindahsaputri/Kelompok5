"use client"

import "./Product.css"
import { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"

// Import gambar produk
import Apple from "./productAssets/AppleTea.png"
import Blackcurrant from "./productAssets/Blackcurrant Tea.png"
import Bublegum from "./productAssets/Bublegum.png"
import Mango from "./productAssets/MangoTea.png"
import Markisa from "./productAssets/MarkisaTea.png"
import Sreawberry from "./productAssets/Sreawberry Tea.png"
import Thai from "./productAssets/ThaiTea.png"
import Ubi from "./productAssets/Ubi.png"
import Grape from "./productAssets/Grape Tea.png"

export const Product = () => {
  const scrollRef = useRef(null)
  const scrollAmount = 300
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const searchQuery = searchParams.get("search")?.toLowerCase() || ""

  const allProducts = [
    { name: "Apple Tea", image: Apple },
    { name: "Blackcurrant Tea", image: Blackcurrant },
    { name: "Bublegum Tea", image: Bublegum },
    { name: "Grape Tea", image: Grape },
    { name: "Mango Tea", image: Mango },
    { name: "Markisa Tea", image: Markisa },
    { name: "Streawberry Tea", image: Sreawberry },
    { name: "Thai Tea", image: Thai },
    { name: "Roasted Sweet p", image: Ubi },
  ]

  const filteredProducts = allProducts.filter((product) => product.name.toLowerCase().includes(searchQuery))

  const handleCheckout = (product) => {
    navigate("/checkout", { state: product })
  }

  return (
    <div className="container">
      <h1 className="title">Nusantara Brew</h1>
      <p className="subtitle">Cemilan dan Minuman Teh Nusantara</p>

      <div className="scroll-controls">
        <button
          className="scroll-btn left"
          onClick={() => scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })}
        >
          &#10094;
        </button>
      </div>

      <div className="scroll-wrapper">
        <div className="grid-container" ref={scrollRef}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="product-wrapper">
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>
                  <button className="product-name" onClick={() => handleCheckout(product)}>
                    {product.name}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-result">Produk tidak ditemukan</p>
          )}
        </div>
      </div>

      <div className="scroll-controls">
        <button
          className="scroll-btn right"
          onClick={() => scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })}
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}

