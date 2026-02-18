import React from "react";

const Sidebar = ({ setSection, onLogout }) => {
  return (
    <div style={styles.sidebar}>
      <h2>Dashboard</h2>

      <button style={styles.btn} onClick={() => setSection("overview")}>
        Overview
      </button>

      <button style={styles.btn} onClick={() => setSection("profile")}>
        Profile
      </button>

      <button style={styles.btn} onClick={() => setSection("settings")}>
        Settings
      </button>

      <button style={styles.logout} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#0d6efd",
    color: "white",
    padding: "20px",
    position: "fixed",
    top: "70px",
  },
  btn: {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    background: "white",
    color: "#0d6efd",
    border: "none",
    cursor: "pointer",
  },
  logout: {
    marginTop: "20px",
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    width: "100%",
  },
};


export default Sidebar;
