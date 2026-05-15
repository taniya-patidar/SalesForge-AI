import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Aapke components ka path yahi hona chahiye: src/components/
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

/**
 * App Component: Ye pura routing logic handle karta hai.
 * 1. '/' par aane wala user automatically '/login' par redirect hoga.
 * 2. '/login' par LoginPage dikhega.
 * 3. '/signup' par SignUpPage dikhega.
 */

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default Route: Jab koi website open karega, login page dikhega */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Login Route */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Sign Up Route */}
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* 404 Page (Optional): Agar koi galat URL daale toh */}
          <Route 
            path="*" 
            element={
              <div className="min-h-screen bg-[#050512] flex items-center justify-center text-white">
                <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
