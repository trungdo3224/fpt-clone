import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
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
import UnderDevelopment from './pages/UnderDevelopment';
import FsafePage from './pages/FsafePage';
import MedicarePage from './pages/MedicarePage';
import { Toaster } from 'react-hot-toast';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <div className='min-h-screen bg-white'>
        {/* Default SEO that will be overridden on specific pages */}
        <SEO />
        <Toaster position='top-center' />
        <Header />
        <Routes>
          {/* Define your explicit routes */}
          <Route path='/' exact element={<Home />} />
          <Route path='/personal' element={<InternetPackages />} />
          <Route path='/family' element={<InternetPackages />} />
          <Route path='/gaming' element={<InternetPackages />} />
          <Route path='/business' element={<InternetPackages />} />
          <Route path='/fptplay' element={<FptPlay />} />
          <Route path='/fptcamera' element={<FptPlay />} />
          <Route path='/fptsmarthome' element={<FptPlay />} />
          <Route path='/register' element={<Register />} />
          <Route path='/fsafe' element={<FsafePage />} />
          <Route path='/fsafe-go' element={<FsafePage />} />
          <Route path='/fptmedicare' element={<MedicarePage />} />
          
        </Routes>
        <Footer />
        <BackToTopButton />
        <FloatingChat />
        <FloatingPhone />
      </div>
    </HelmetProvider>
  );
}

export default App;
