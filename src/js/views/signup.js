// src/js/views/SignUpForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from '../configSignIn/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "../../styles/demo.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailPasswordSignUp = async (e) => {
    e.preventDefault();

    const emailDomain = "@unimet.edu.ve";
    if (!email.endsWith(emailDomain)) {
      setError(`Email must end with ${emailDomain}`);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User registered:", user);
      navigate("/login");
    } catch (error) {
      console.error("Error registering new user:", error);
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email;

      const emailDomain = "@unimet.edu.ve";
      if (!email.endsWith(emailDomain)) {
        setError(`Email must end with ${emailDomain}`);
        // Cerrar sesión del usuario si el correo no es válido.
        await auth.signOut();
        return;
      }

      console.log("User registered with Google:", user);
      navigate("/login");
    } catch (error) {
      console.error("Error registering with Google:", error);
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleEmailPasswordSignUp}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary mt-2">
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={handleGoogleSignUp}
            >
              Sign Up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;