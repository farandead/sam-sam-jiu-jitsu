import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { ParallaxProvider } from 'react-scroll-parallax'; // Import ParallaxProvider
import Header from './components/Header';
import ParallaxBackground from './components/ParallaxBackground';
import BJJAcademyInfo from './components/BJJAcademyInfo';
import Footer from './components/Footer'; // Import the Footer component
import FAQ from './components/FAQ'; // Import the FAQ component
import MeetTheCoach from './components/Pages/meet_the_coaches'; // Import the MeetTheCoach component
import Memberships from './components/Pages/our_membership'; // Import the Memberships component
import BookClass from './components/Pages/book_class'; // Import the BookClass component
import TermsAndConditions from './components/Pages/terms_and_condition'; // Import the TermsAndConditions component
import BackgroundVideo from './components/BackgroundVideo';
import ClassSchedule from './components/Pages/class_schedule'; // Import the ClassSchedule component
import ContactUs from './components/Pages/contact_us'; // Import the ContactUs component

function App() {
  const location = useLocation(); // Get the current route location
  return (
    <ParallaxProvider> {/* Wrap your app inside ParallaxProvider */}
      <div className="App">
        <Header />
        {location.pathname === '/' && <ParallaxBackground />}
        
        {/* Define the routes for different pages */}
        <Routes>
          <Route path="/" element={<BJJAcademyInfo />} />  {/* Home page showing the BJJ Academy info */}
          <Route path="/faq" element={<FAQ />} /> {/* FAQ page */}
          <Route path="/meet-the-coach" element={<MeetTheCoach />} /> 
          <Route path="/our-memberships" element={<Memberships />} /> 
          <Route path="/book-free-trial" element={<BookClass />} /> 
          <Route path="/terms_and_conditions" element={<TermsAndConditions />} /> 
          <Route path="/class_schedule" element={<ClassSchedule />} /> 
          <Route path="/contact_us" element={<ContactUs />} /> 
        </Routes>
        
        <Footer />  {/* Common footer for the app */}
      </div>
    </ParallaxProvider>
  );
}

export default App;