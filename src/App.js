import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
