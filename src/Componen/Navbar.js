import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react"; // Import ikon pencarian
import "./Navbar.css";
import Logo from "./homeAssets/logo.png";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fungsi pencarian
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/Product?search=${searchTerm}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo-container">
          <img src={Logo} alt="Nusantara Brew" className="navbar-logo" />
          <span className="navbar-brand">Nusantara Brew</span>
        </div>

        {/* Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Product" className="navbar-link">Product</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/About" className="navbar-link">About</Link>
          </li>
        </ul>

        {/* Search dengan ikon */}
        <div className="search-container" ref={searchRef}>
          <input
            type="text"
            className="search-input active"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="search-icon" onClick={handleSearch}>
            <Search size={20} color="#333" />
          </button>
        </div>
      </div>
    </nav>
  );
};
