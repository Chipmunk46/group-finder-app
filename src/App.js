import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
