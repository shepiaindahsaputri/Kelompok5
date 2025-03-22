import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "./homeAssets/logo.png"; // Pastikan path ini sesuai dengan lokasi file logo

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Menutup input saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm(""); // Hapus teks pencarian saat klik di luar
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Menjalankan pencarian saat pengguna menekan Enter
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
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

        {/* Search */}
        <div className="search-container" ref={searchRef}>
          <input
            type="text"
            className="search-input active"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            autoFocus
          />
        </div>
      </div>
    </nav>
  );
};
