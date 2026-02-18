import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      © {new Date().getFullYear()} MyApp | All Rights Reserved
    </div>
  );
};

const styles = {
  footer: {
    background: "#0d6efd",
    color: "white",
    textAlign: "center",
    padding: "10px",
  },
};

export default Footer;
