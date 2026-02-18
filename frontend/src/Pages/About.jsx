import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.title}>About MyApp</h1>
      <p style={styles.subtitle}>
        Learn more about our platform and what we offer.
      </p>

      {/* About Section */}
      <div style={styles.section}>
        <h2>Who We Are</h2>
        <p>
          MyApp is a modern web application built using the MERN Stack
          (MongoDB, Express, React, Node.js). It helps users manage their data,
          track activities, and work efficiently with a clean and user-friendly interface.
        </p>
      </div>

      {/* Mission Section */}
      <div style={styles.section}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide fast, secure, and scalable web solutions.
          We focus on performance, user experience, and modern design standards.
        </p>
      </div>

      {/* Technology Section */}
      <div style={styles.section}>
        <h2>Technologies Used</h2>
        <ul style={styles.list}>
          <li>React.js (Frontend)</li>
          <li>Node.js & Express.js (Backend)</li>
          <li>MongoDB (Database)</li>
          <li>JWT Authentication</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
    textAlign: "center",
    color: "#0d6efd",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "16px",
    color: "#555",
  },
  section: {
    marginBottom: "30px",
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
};

export default About;
