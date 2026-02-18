import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>MyApp</div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/login"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Signup
        </NavLink>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#0d6efd",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: "25px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    padding: "6px 10px",
    borderRadius: "4px",
    transition: "0.3s",
  },
  active: {
    backgroundColor: "white",
    color: "#0d6efd",
    fontWeight: "bold",
  },
};

export default Header;
