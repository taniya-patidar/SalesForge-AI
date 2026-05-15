import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050512]">
      {/* Background Animated Nebulas */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-8 mx-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Login</h1>
          <p className="text-gray-400">Welcome Back to <span className="text-purple-400 font-semibold">SalesForge AI</span></p>
        </div>

        <form className="space-y-6">
          <input 
            type="email" 
            placeholder="Email"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50"
          />

          <input 
            type="password" 
            placeholder="Password"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50"
          />

          <div className="text-right">
            <a href="#" className="text-sm text-gray-400 hover:text-purple-400">Forgot Password?</a>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold"
          >
            Log In
          </motion.button>
        </form>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Don't have an account? <Link to="/signup" className="text-purple-400 font-semibold hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;