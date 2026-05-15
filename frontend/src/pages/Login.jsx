import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { signInWithPopup } from "firebase/auth";

import {
  auth,
  provider
} from "../firebase/firebase";

function Login() {

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {

    try {

      const result = await signInWithPopup(
        auth,
        provider
      );

      console.log(result.user);

      alert("Login Successful 🚀");

      // 🔥 redirect to dashboard
      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (
    <div className="login-page">

      <div className="bg-glow blue"></div>
      <div className="bg-glow purple"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="login-card"
      >

        <h1>Welcome Back 👋</h1>

        <p className="subtitle">
          Login to continue to your AI dashboard
        </p>

        <form className="login-form">

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
              placeholder="Enter your password"
            />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="login-btn"
          >
            Login
          </motion.button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </motion.div>

    </div>
  );
}

export default Login;