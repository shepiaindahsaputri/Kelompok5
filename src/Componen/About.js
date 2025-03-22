import "./About.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleTryNowClick = () => {
    navigate("/Products?scroll=true"); // Tambahkan query parameter
  };
  

  return (
    <div className="about-container">
      {/* Bagian Header */}
      <div className="about-header">
        <h1 className="about-title">Tentang Kami</h1>
        <p className="about-subtitle">
          Menyajikan kehangatan dan cita rasa autentik Nusantara dalam setiap tegukan.
        </p>
      </div>

      {/* Bagian Sejarah */}
      <div className="about-section">
        <div className="about-image-container">
          <img src="/images/about-history.jpg" alt="Sejarah Kami" className="about-image" />
        </div>
        <div className="about-text">
          <h2>Sejarah Kami</h2>
          <p>
            Nusantara Brew lahir dari kecintaan terhadap kekayaan rasa teh asli Indonesia. 
            Berawal dari usaha kecil di tahun 2015, kami terus berkembang dengan misi menghadirkan teh 
            terbaik dari berbagai daerah di Nusantara.
          </p>
        </div>
      </div>

      {/* Bagian Visi & Misi */}
      <div className="about-section reverse">
        <div className="about-text">
          <h2>Visi Kami</h2>
          <p>
            Menjadi merek teh Nusantara terkemuka yang membawa cita rasa khas Indonesia ke seluruh dunia.
          </p>

          <h2>Misi Kami</h2>
          <ul>
            <li>Menggunakan bahan alami berkualitas tinggi dari petani lokal.</li>
            <li>Menyajikan pengalaman minum teh yang unik dan otentik.</li>
            <li>Menjaga tradisi teh Indonesia dengan inovasi modern.</li>
          </ul>
        </div>
        <div className="about-image-container">
          <img src="/images/about-mission.jpg" alt="Misi Kami" className="about-image" />
        </div>
      </div>

      {/* Bagian Nilai Utama */}
      <div className="about-section">
        <div className="about-image-container">
          <img src="src/Componen/productAssets/AppleTea.png" alt="Nilai Kami" className="about-image" />
        </div>
        <div className="about-text">
          <h2>Nilai Utama Kami</h2>
          <ul>
            <li><strong>Autentik:</strong> Menjaga cita rasa asli teh Nusantara.</li>
            <li><strong>Kualitas:</strong> Hanya menggunakan bahan terbaik tanpa bahan kimia berbahaya.</li>
            <li><strong>Keberlanjutan:</strong> Bekerja sama dengan petani lokal untuk mendukung ekonomi berkelanjutan.</li>
          </ul>
        </div>
      </div>

      {/* Bagian Kenapa Memilih Kami */}
      <div className="about-section reverse">
        <div className="about-text">
          <h2>Kenapa Memilih Kami?</h2>
          <ul>
            <li>100% bahan alami tanpa pengawet dan pewarna buatan.</li>
            <li>Beragam varian rasa khas dari berbagai daerah di Indonesia.</li>
            <li>Diproduksi dengan standar kebersihan dan kualitas tinggi.</li>
            <li>Komitmen terhadap keberlanjutan dan mendukung petani lokal.</li>
          </ul>
        </div>
        <div className="about-image-container">
          <img src="/images/about-why-us.jpg" alt="Kenapa Memilih Kami" className="about-image" />
        </div>
      </div>

      {/* Bagian Call to Action */}
      <div className="about-cta">
        <h2>Rasakan Sensasi Teh Nusantara</h2>
        <p>
          Temukan varian rasa yang kaya dan autentik. Segera nikmati pengalaman minum teh yang berbeda!
        </p>
        
        <button className="about-button" onClick={handleTryNowClick}>
          Coba Sekarang
        </button>
      </div>
    </div>
  );
};

