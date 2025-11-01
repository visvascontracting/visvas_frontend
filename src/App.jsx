import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BookMeetingModal from './components/contactUs/BookMeetingModal';
import SuccessToast from './components/SuccessToast';
import Welcome from './components/Welcome';
import Home from './components/landingPage/Home';
import OurProject from './components/ourProject/ourproject';
import FAQs from './components/faqs/faqs';
import AboutUs from './components/aboutUs/aboutus';
import ContactUs from './components/contactUs/contactus';
import AdminLogin from './components/admin/adminAuth/AdminLogin';
import AdminRegister from './components/admin/adminAuth/AdminRegister';
import AdminDashboard from './components/admin/adminPage/AdminDashboard';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleBookingSuccess = (message) => {
    setSuccessMessage(message);
    setIsSuccessVisible(true);
  };

  const closeSuccessToast = () => {
    setIsSuccessVisible(false);
    setSuccessMessage('');
  };

  const handleAdminLogin = (user, token) => {
    // Redirect to admin dashboard after successful login
    window.location.href = '/admin';
  };

  const handleAdminRegister = (user, token) => {
    // Redirect to admin dashboard after successful registration
    window.location.href = '/admin';
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Header onBookMeetingClick={openModal} />
              <Home onBookMeetingClick={openModal} />
              <Footer onBookMeetingClick={openModal} isModalOpen={isModalOpen} onBookingSuccess={handleBookingSuccess} />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Header onBookMeetingClick={openModal} />
              <OurProject />
              <Footer onBookMeetingClick={openModal} isModalOpen={isModalOpen} onBookingSuccess={handleBookingSuccess} />
            </>
          } />
          <Route path="/faqs" element={
            <>
              <Header onBookMeetingClick={openModal} />
              <FAQs />
              <Footer onBookMeetingClick={openModal} isModalOpen={isModalOpen} onBookingSuccess={handleBookingSuccess} />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header onBookMeetingClick={openModal} />
              <AboutUs />
              <Footer onBookMeetingClick={openModal} isModalOpen={isModalOpen} onBookingSuccess={handleBookingSuccess} />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header onBookMeetingClick={openModal} />
              <ContactUs onBookMeetingClick={openModal} />
              <Footer onBookMeetingClick={openModal} isModalOpen={isModalOpen} onBookingSuccess={handleBookingSuccess} />
            </>
          } />

          {/* User Routes */}
          <Route path="/welcome" element={<Welcome />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={
            <AdminLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/admin/dashboard/register" element={
            <AdminRegister onRegister={handleAdminRegister} />
          } />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        {/* Global Components */}
        <BookMeetingModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onBookingSuccess={handleBookingSuccess}
        />
        <SuccessToast
          message={successMessage}
          isVisible={isSuccessVisible}
          onClose={closeSuccessToast}
        />
      </div>
    </Router>
  );
}

export default App;
