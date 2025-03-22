import "./Contact.css";
import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">Contact us</h1>
        <p className="contact-description">
        Temukan kenikmatan teh khas Nusantara bersama kami! Jika Anda memiliki pertanyaan, masukan, atau ingin menjalin kerja sama, jangan ragu untuk menghubungi kami melalui berbagai cara berikut:
        </p>
        
        <div className="contact-options">
  <div className="contact-option">
    <Mail className="contact-icon" size={20} />
    <a href="mailto:nusantarabrew@gmail.com" className="contact-link">
      nusantarabrew@gmail.com
    </a>
  </div>
  <div className="contact-option">
    <MapPin className="contact-icon" size={20} />
    <a
      href="https://maps.app.goo.gl/aQGTiUZgpkzCXmso9"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      Pucakwangi, Kec. Pagerruyung, Kabupaten Kendal, Jawa Tengah 51361
    </a>
  </div>
</div>

        
        <div className="follow-us"> 
          <h3>Hubungi Kami</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/defi_purwa/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
              <Instagram className="social-icon" size={24} />
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <Phone className="social-icon" size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="contact-right">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone" className="input-field" />
            <input type="text" placeholder="Subject" className="input-field" />
          </div>
          <textarea placeholder="Message" className="textarea-field"></textarea>
          <button type="submit" className="submit-button">Send message</button>
        </form>
      </div>
    </div>
  );
};
