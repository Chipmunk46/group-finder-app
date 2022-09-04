import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
