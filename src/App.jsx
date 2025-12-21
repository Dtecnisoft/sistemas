import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Conceptos from './pages/Conceptos';
import Analogias from './pages/Analogias';
//import QuizPage from './pages/QuizPage';
//import Dashboard from './pages/Dashboard';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conceptos" element={<Conceptos />} />
            <Route path="/analogias" element={<Analogias />} />
            <Route path="/analogias/:id" element={<Analogias />} />
            {/* <Route path="/quiz" element={<QuizPage />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;