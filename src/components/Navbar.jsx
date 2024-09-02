// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css';
import './MainSection.css'
const Navbar = () => {
  const [isJenjangOpen, setIsJenjangOpen] = useState(false);
  const [isPaketOpen, setIsPaketOpen] = useState(false);
  const [isMasukanKodeOpen, setIsMasukanKodeOpen] = useState(false);
  const [isMasukOpen, setIsMasukOpen] = useState(false);
  const [isDaftarOpen, setIsDaftarOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <h1>APP_QUIZ</h1>
      </div>
      
      <nav className="nav-links">
        <a href="#" className="nav-link">Home</a>

        <div className="nav-item">
          <a
            href="#"
            className="nav-link"
            onClick={() => setIsJenjangOpen(!isJenjangOpen)}
          >
            Jenjang
          </a>
          {isJenjangOpen && (
            <div className="dropdown-menu">
              <a href="#">SD</a>
              <a href="#">SMP</a>
              <a href="#">SMA</a>
            </div>
          )}
        </div>

        <div className="nav-item">
          <a
            href="#"
            className="nav-link"
            onClick={() => setIsPaketOpen(!isPaketOpen)}
          >
            Paket
          </a>
          {isPaketOpen && (
            <div className="dropdown-menu">
              <a href="#">Paket 1</a>
              <a href="#">Paket 2</a>
              <a href="#">Paket 3</a>
            </div>
          )}
        </div>

        <div className="nav-item">
          <a
            href="#"
            className="nav-link"
            onClick={() => setIsMasukanKodeOpen(!isMasukanKodeOpen)}
          >
            Masukan Kode
          </a>
          {isMasukanKodeOpen && (
            <div className="dropdown-menu">
              <a href="KodeInput"className="MasukanKode"></a>
              
              
            </div>
          )}
        </div>

        <div className="nav-item">
          <a
            href="#"
            className="nav-link"
            onClick={() => setIsMasukOpen(!isMasukOpen)}
          >
            Masuk
          </a>
          {isMasukOpen && (
            <div className="dropdown-menu">
              <a href="#">User 1</a>
              <a href="#">User 2</a>
              <a href="#">User 3</a>
            </div>
          )}
        </div>

        <div className="nav-item">
          <button
            className="register-button"
            onClick={() => setIsDaftarOpen(!isDaftarOpen)}
          >
            Daftar
          </button>
          {isDaftarOpen && (
            <div className="dropdown-menu">
              <a href="#">Daftar 1</a>
              <a href="#">Daftar 2</a>
              <a href="#">Daftar 3</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
