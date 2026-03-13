import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Adicione Routes aqui
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import Menu from './components/menu';
import Banner from './components/home/banner';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Banner />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>

  );
}

export default App;