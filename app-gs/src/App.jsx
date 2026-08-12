import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Adicione Routes aqui
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import Menu from './components/menu';
import Banner from './components/home/banner';
import Experiences from './components/experience/Experiences';
import Contact from './components/contact';
import Work from './components/works';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>

  );
}

export default App;