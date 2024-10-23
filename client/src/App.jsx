import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Exams from './pages/Exams/Exams';
import Home from './pages/Home/Home';
import TodoApp from './pages/TodoApp/TodoApp';
import SignIn from './pages/SignIn/SignIn';
import { assets } from './assets/assets';
import NotesApp from './pages/NotesApp/NotesApp';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/notes" element={<NotesApp />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;
