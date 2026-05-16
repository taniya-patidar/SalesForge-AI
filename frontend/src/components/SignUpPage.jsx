import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050512]">
      {/* Background Animated Nebulas (Cyan/Teal theme for Signup) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-8 mx-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Sign Up</h1>
          <p className="text-gray-400">Get Started with <span className="text-cyan-400 font-semibold">SalesForge AI</span></p>
        </div>

        <form className="space-y-5">
          {/* Full Name */}
          <input 
            type="text" 
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
          />

          {/* Work Email */}
          <input 
            type="email" 
            placeholder="Work Email"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
          />

          {/* Create Password */}
          <input 
            type="password" 
            placeholder="Create Password"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
          />

          <p className="text-[12px] text-gray-500 px-1">
            By signing up, you agree to our <span className="text-cyan-400 cursor-pointer">Terms of Service</span>.
          </p>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg transition-all"
          >
            Create Free Account
          </motion.button>
        </form>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Already have an account? <Link to="/login" className="text-cyan-400 font-semibold hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpPage;