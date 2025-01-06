import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Import useState to manage form state
import styles from "./signUp.module.css";

const Signup = () => {
  const navigate1 = useNavigate();
  
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleSigninNavigation = () => {
    navigate1("/");
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create user object from form inputs
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

   try {

    console.log({userData});

      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Send user data as JSON
      });

      if (response.ok) {
        // If registration is successful
        console.log("Registration successful");
        navigate1("/"); // Navigate to sign-in page or another route
      } else {
        // If registration fails
        const errorMessage = await response.text();
        setError(errorMessage || "Registration failed");
      }


    } catch (err) {
      console.error("Error during signup:", err);
      setError("An error occurred. Please try again."); 
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>

         

          <h1>Already have an account?</h1>
          <button
            type="button"
            className={styles.white_btn}
            onClick={handleSigninNavigation}
          >
            Sign in
          </button>
        </div>

        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSignup}>
            <h1>Create Account</h1>
            {error && <p className={styles.error}>{error}</p>} {/* Display error if exists */}
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} // Update state on change
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} // Update state on change
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              required
              className={styles.input}
            />
            
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
