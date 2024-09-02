// src/components/MainSection.js
import './MainSection.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="text-content">
        <h2 className="main-title">Aplikasi Quiz Berbasis Web</h2>
        <h3 className="main-subtitle">Soal Ujian Praktis & Efesien</h3>
        <p className="description">
          Uji Kompetensi siswa jadi lebih mudah dengan fitur khusus yang sesuai dengan kebutuhan sekolah
        </p>
        <button className="cta-button">Lihat Selengkapnya</button>
      </div>
      <div className="image-content">
        <img src="/src/assets/images.png" alt="Quiz Illustration" />
      </div>
    </section>
  );
};

export default MainSection;
