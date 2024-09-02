// src/components/Footer.js
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Tentang Kami</h4>
          <p>APP_QUIZ adalah aplikasi berbasis web yang menyediakan soal ujian praktis dan efisien untuk kebutuhan sekolah.</p>
        </div>
        <div className="footer-section">
          <h4>Kontak</h4>
          <p>Email: support@appquiz.com</p>
          <p>Telepon: +62 123 4567 890</p>
        </div>
        <div className="footer-section">
          <h4>Ikuti Kami</h4>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} APP_QUIZ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
