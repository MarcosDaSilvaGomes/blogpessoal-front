import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/paginas/home/Home';
import { About } from './components/paginas/about/About';
import { Footer } from './components/estaticos/footer/Footer';
import ButtonAppBar from './components/estaticos/navbar/Navbar';

function App() {
  const nome = 'Marcos'
  return (
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route path='/' element= { <Home />} />
        <Route path='/home' element= { <Home />} />
        <Route path='/about' element= { <About />} />

      </Routes>
      <Footer />
    </Router>
    );
}

export default App;