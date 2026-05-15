import "./Signup.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { signInWithPopup } from "firebase/auth";

import {
  auth,
  provider
} from "../firebase/firebase";

function Signup() {

  const handleGoogleSignup = async () => {

    try {

      const result = await signInWithPopup(
        auth,
        provider
      );

      console.log(result.user);

      alert("Login Successful 🚀");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (
    <div className="signup-page">

      <div className="bg-glow blue"></div>
      <div className="bg-glow purple"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="signup-card"
      >

        <h1>Get Started 🚀</h1>

        <p className="subtitle">
          Continue with your Google account
        </p>

        <form className="signup-form">

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>
          {/* Sign up button */}
          <motion.button whileHover={{scale:1.03}}
          whileTap={{scale:0.96}}
          className="signup-btn"> Create Account</motion.button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          className="google-btn"
          onClick={handleGoogleSignup}
        >
          Continue with Google
        </button>

        <p className="login-text">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </motion.div>

    </div>
  );
}

export default Signup;