import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignupNavigation = () => {
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), 
      });

      if (response.ok) {

        const message = await response.text(); // Read the response message
        console.log(message); // Log success message for debugging
        navigate("/dashboard"); // Navigate to the dashboard on success
      } else {
        // If login fails
        const errorMessage = await response.text(); // Read error message from response
        setError(errorMessage || "Login failed"); // Set error message to state
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred. Please try again."); // Set generic error message
    }
  };

  
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleLogin}>
            <h1>Login to Your Account</h1>
            {error && <p className={styles.error}>{error}</p>} {/* Display error if exists */}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <h1>New Here?</h1>
          <button
            type="button"
            className={styles.white_btn}
            onClick={handleSignupNavigation}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;










