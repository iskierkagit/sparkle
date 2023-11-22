
import "./App.css";
import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About/About';
import Parents from './Components/Pages/Parents/Parents';
import Galery from './Components/Pages/Galery';
import Contact from './Components/Pages/Contact';
import History from './Components/Pages/About/History';
import Sparkle from './Components/Pages/About/Sparkle';
import Finances from './Components/Pages/About/Finances';
import Management from './Components/Pages/About/Managment';
import Hamburger from './Components/Hamburger';
import Footer from './Components/Footer';
import Actions from './Components/Pages/Actions'
import CookieConsent from './Components/CookieConsent';
import { useCookies } from "react-cookie";


const App = () => {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <div className="App">
    <Router>
      <Hamburger/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sparkle' element={<Sparkle/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/parents' element={<Parents/>} />
        <Route path='/galery' element={<Galery/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/finances' element={<Finances/>} />
        <Route path='/management' element={<Management/>} />
        <Route path='/actions' element={<Actions/>} />
      </Routes>
      {!cookies.cookieConsent && <CookieConsent />}
      <Footer/>
    </Router>
  </div>
  );
}

export default App