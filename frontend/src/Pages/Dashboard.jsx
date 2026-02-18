import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";


const Dashboard = () => {
  const navigate = useNavigate();
  const [section, setSection] = useState("overview");
  const [user, setUser] = useState(null);

  // Safe login check
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login");
    } else {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Invalid user data");
        localStorage.removeItem("user");
        navigate("/login");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const renderSection = () => {
    switch (section) {
      case "profile":
            return <Profile user={user} setUser={setUser} />;



      case "settings":
        return (
          <div>
            <h2>Settings</h2>
            <p>Settings section (future features)</p>
          </div>
        );

      default:
        return (
          <div>
            <h2>Overview</h2>
            <div style={styles.cards}>
              <div style={styles.card}>
                <h3>Users</h3>
                <p>120</p>
              </div>
              <div style={styles.card}>
                <h3>Projects</h3>
                <p>15</p>
              </div>
              <div style={styles.card}>
                <h3>Tasks</h3>
                <p>45</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <Sidebar setSection={setSection} onLogout={handleLogout} />

      <div style={styles.main}>
        <h1>Welcome {user?.email}</h1>
        {renderSection()}
      </div>
    </div>
  );
};

const styles = {
  main: {
    marginLeft: "240px",
    padding: "30px",
    background: "#f4f6f9",
    minHeight: "100vh",
  },
  cards: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    width: "150px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Dashboard;
