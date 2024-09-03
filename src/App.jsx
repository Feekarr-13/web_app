import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      {/* Konten lainnya */}
      <Footer />
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;
