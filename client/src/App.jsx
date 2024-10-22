import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Exams from './pages/Exams/Exams';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exams" element={<Exams />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
