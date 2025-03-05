import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import QuickLinks from './components/QuickLinks';

import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import InternetPackages from './pages/InternetPackages';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <Banner />
      <QuickLinks />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/internet-ca-nhan' element={<InternetPackages />} />
      </Routes>
      <Footer />
      <BackToTopButton />
      <FloatingChat />
    </div>
  );
}

export default App;
