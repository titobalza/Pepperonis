import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { auth, provider } from '../configSignIn/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import "../../styles/demo.css";
import icono from "../../img/fondo.png";


const LoginForm = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const token = sessionStorage.getItem("token");
  const admin = sessionStorage.getItem("admin");
  const navigate = useNavigate();
  
  const handleEmailPasswordLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
      if (user.email == "admin@correo.unimet.edu.ve") {
        sessionStorage.setItem("admin", user.accessToken);
      } else {
        sessionStorage.setItem("token", user.accessToken);
        sessionStorage.setItem("email", user.email);
      }
      navigate("/");
    } catch (error) {
      console.error("Error logging in with email and password:", error);
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email;

      const emailDomain = "@correo.unimet.edu.ve";
      if (!email.endsWith(emailDomain)) {
        setError(`Email must end with ${emailDomain}`);
        // Cerrar sesión del usuario si el correo no es válido.
        await auth.signOut();
        return;
      }
      if (user.email ) 
      console.log('Logged in user with Google:', user);
      if (user.email == "admin@correo.unimet.edu.ve") {
        sessionStorage.setItem("admin", user.accessToken);
      } else {
        sessionStorage.setItem("token", user.accessToken);
        sessionStorage.setItem("email", user.email)
      }
      navigate("/");
    } catch (error) {
      console.error("Error logging in with Google:", error);
      setError(error.message); 
    }
  };
  
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
    navigate("/");
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailPasswordLogin();
  };
  
  if ((token && token !== "" && token !== undefined) || (admin && admin !== "" && admin !== undefined)) navigate("/");

  return (
    <div style={{
      backgroundImage: `url(${icono})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}>
      <div className="container" >
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Login</h2>
            {(token && token !== "" && token !== undefined) || (admin && admin !== "" && admin !== undefined) ? (
              <>
                <p>You are already logged in.</p>
                <button className="btn btn-primary" onClick={handleLogout}>
                  Log Out
                </button>
              </>
            ) : (
              <form onSubmit={handleSubmit}>
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
                  {error && <p className="text-danger">{error}</p>}
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mt-2"
                  onClick={handleGoogleLogin}
                >
                  Login with Google
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
