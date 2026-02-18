import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to MyApp</h1>
        <p style={styles.subtitle}>
          Build your dashboard, manage your data and grow faster with our MERN solution.
        </p>

        <div>
          <Link to="/login">
            <button style={styles.primaryBtn}>Get Started</button>
          </Link>

          <Link to="/signup">
            <button style={styles.secondaryBtn}>Create Account</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Our Features</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>User Authentication</h3>
            <p>Secure Login & Signup with JWT authentication.</p>
          </div>

          <div style={styles.card}>
            <h3>Dashboard</h3>
            <p>Manage your profile and data in a modern dashboard.</p>
          </div>

          <div style={styles.card}>
            <h3>Fast Performance</h3>
            <p>Built with React, Node, Express & MongoDB.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <h2>Start Your Journey Today</h2>
        <Link to="/signup">
          <button style={styles.primaryBtn}>Join Now</button>
        </Link>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    height: "80vh",
    background: "linear-gradient(135deg, #007bff, #00c6ff)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    marginBottom: "20px",
  },
  primaryBtn: {
    padding: "12px 25px",
    marginRight: "10px",
    fontSize: "16px",
    backgroundColor: "#fff",
    color: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "12px 25px",
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  featuresSection: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
  },
  sectionTitle: {
    marginBottom: "40px",
    fontSize: "32px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "white",
    padding: "20px",
    width: "280px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  ctaSection: {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#007bff",
    color: "white",
  },
};

export default Home;
