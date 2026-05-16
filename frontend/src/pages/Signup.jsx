import { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

function Toast({ message, type, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`toast toast-${type}`}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <span className="toast-icon">{type === "success" ? "✓" : "✕"}</span>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3500);
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    else if (form.name.trim().length < 2) errs.name = "Name must be at least 2 characters";

    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address";

    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";

    if (!form.confirm) errs.confirm = "Please confirm your password";
    else if (form.password !== form.confirm)
      errs.confirm = "Passwords do not match";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Password strength
  const getStrength = (pwd) => {
    if (!pwd) return 0;
    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 10) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };
  const strength = getStrength(form.password);
  const strengthLabel = ["", "Very weak", "Weak", "Fair", "Strong", "Very strong"][strength];
  const strengthColor = ["", "#ef4444", "#f97316", "#eab308", "#22c55e", "#10b981"][strength];

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(result.user, { displayName: form.name.trim() });
      showToast("Account created! Welcome aboard 🚀", "success");
      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (error) {
      const msg =
        error.code === "auth/email-already-in-use"
          ? "An account with this email already exists"
          : error.code === "auth/weak-password"
          ? "Password is too weak"
          : "Signup failed. Please try again";
      showToast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    try {
      await signInWithPopup(auth, provider);
      showToast("Account created! Welcome aboard 🚀", "success");
      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (error) {
      if (error.code !== "auth/popup-closed-by-user") {
        showToast("Google signup failed. Please try again", "error");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <Toast {...toast} />

      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-overlay" />

      <motion.div
        className="signup-card"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Brand */}
        <div className="brand">
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="url(#lg2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="lg2" x1="2" y1="2" x2="22" y2="22">
                  <stop stopColor="#a78bfa"/>
                  <stop offset="1" stopColor="#34d399"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="brand-name">FlowZint AI</span>
        </div>

        <h1 className="signup-title">Create account</h1>
        <p className="signup-sub">Start building your AI Sales Bot today</p>

        <form className="signup-form" onSubmit={handleEmailSignup} noValidate>

          {/* Full Name */}
          <div className={`field-group ${errors.name ? "has-error" : ""}`}>
            <label className="field-label">Full name</label>
            <div className="field-wrap">
              <span className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input className="field-input" type="text" placeholder="Taniya Patidar"
                value={form.name} onChange={handleChange("name")} autoComplete="name" />
            </div>
            {errors.name && <p className="field-error">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className={`field-group ${errors.email ? "has-error" : ""}`}>
            <label className="field-label">Email</label>
            <div className="field-wrap">
              <span className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7 10-7"/>
                </svg>
              </span>
              <input className="field-input" type="email" placeholder="you@example.com"
                value={form.email} onChange={handleChange("email")} autoComplete="email" />
            </div>
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className={`field-group ${errors.password ? "has-error" : ""}`}>
            <label className="field-label">Password</label>
            <div className="field-wrap">
              <span className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input className="field-input" type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={form.password} onChange={handleChange("password")} autoComplete="new-password" />
              <button type="button" className="eye-btn" onClick={() => setShowPassword(s => !s)} aria-label="Toggle password">
                {showPassword
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                }
              </button>
            </div>
            {/* Strength bar */}
            {form.password && (
              <div className="strength-wrap">
                <div className="strength-bars">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="strength-bar"
                      style={{ background: i <= strength ? strengthColor : "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
                <span className="strength-label" style={{ color: strengthColor }}>{strengthLabel}</span>
              </div>
            )}
            {errors.password && <p className="field-error">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className={`field-group ${errors.confirm ? "has-error" : ""}`}>
            <label className="field-label">Confirm password</label>
            <div className="field-wrap">
              <span className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input className="field-input" type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={form.confirm} onChange={handleChange("confirm")} autoComplete="new-password" />
              <button type="button" className="eye-btn" onClick={() => setShowConfirm(s => !s)} aria-label="Toggle confirm password">
                {showConfirm
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                }
              </button>
            </div>
            {/* Match indicator */}
            {form.confirm && (
              <p className="match-hint" style={{ color: form.password === form.confirm ? "#34d399" : "#fca5a5" }}>
                {form.password === form.confirm ? "✓ Passwords match" : "✕ Passwords do not match"}
              </p>
            )}
            {errors.confirm && <p className="field-error">{errors.confirm}</p>}
          </div>

          <motion.button type="submit" className="primary-btn"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            {loading ? <span className="spinner" /> : "Create Account"}
          </motion.button>
        </form>

        <div className="divider">
          <span className="divider-line" />
          <span className="divider-text">or continue with</span>
          <span className="divider-line" />
        </div>

        <motion.button className="google-btn" onClick={handleGoogleSignup}
          disabled={googleLoading}
          whileHover={{ scale: googleLoading ? 1 : 1.02 }}
          whileTap={{ scale: googleLoading ? 1 : 0.98 }}
        >
          {googleLoading ? <span className="spinner spinner-dark" /> : (
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.8-3.4-11.4-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C42 35.9 44 30.4 44 24c0-1.3-.1-2.7-.4-3.9z"/>
            </svg>
          )}
          {googleLoading ? "Creating account..." : "Continue with Google"}
        </motion.button>

        <p className="login-prompt">
          Already have an account?{" "}
          <Link to="/" className="login-link">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;
