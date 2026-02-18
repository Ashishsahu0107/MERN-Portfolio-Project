import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Signup</h2>

        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button style={styles.button}>Signup</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "white",
    padding: "30px",
    width: "350px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
  },
  button: {
    padding: "10px",
    background: "#0d6efd",
    color: "white",
    border: "none",
  },
};

export default Signup;
