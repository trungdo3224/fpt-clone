import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import InternetPackages from './pages/InternetPackages';
import Register from './pages/Register';
import FloatingPhone from './components/FloatingPhone';
import FptPlay from './pages/FptPlay';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/personal' element={<InternetPackages />} />
        <Route path='/family' element={<InternetPackages />} />
        <Route path='/gaming' element={<InternetPackages />} />
        <Route path='/business' element={<InternetPackages />} />
        <Route path='/fptplay' element={<FptPlay />} />
        <Route path='/fptcamera' element={<FptPlay />} />
        <Route path='/fptsmarthome' element={<FptPlay />} />

        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
      <BackToTopButton />
      <FloatingChat />
      <FloatingPhone />
    </div>
  );
}

export default App;