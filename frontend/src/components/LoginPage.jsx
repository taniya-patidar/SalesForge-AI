import React from 'react';
import { Mail, Lock, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../index.css';

const LoginPage = () => {
  return (
    <div className="login-body">
      {/* Background elements */}
      <div className="circle-1"></div>
      <div className="circle-2"></div>

      <div className="glass-card">
        <div className="login-header">
          <h1>Login</h1>
          <p>Welcome back to SalesForge AI</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Email Input */}
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input 
              type="email" 
              className="input-field" 
              placeholder="Email Address" 
              required 
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input 
              type="password" 
              className="input-field" 
              placeholder="Password" 
              required 
            />
            <EyeOff 
              style={{position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#6b7280'}} 
              size={18} 
            />
          </div>

          <div style={{textAlign: 'right', marginBottom: '20px'}}>
             <a href="#" style={{color: '#9ca3af', fontSize: '0.8rem', textDecoration: 'none'}}>Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;