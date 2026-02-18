import React, { useState, useEffect } from "react";

const Profile = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);

  // Load saved profile
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setUsername(savedProfile.username || "");
      setMobile(savedProfile.mobile || "");
      setPhoto(savedProfile.photo || null);
      setResume(savedProfile.resume || null);
    }
  }, []);

  // Save profile
  const handleSave = () => {
    const profileData = {
      username,
      mobile,
      photo,
      resume,
    };

    localStorage.setItem("profile", JSON.stringify(profileData));
    alert("Profile Saved");
  };

  // Photo Upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Resume Upload
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file.name);
    }
  };

  const handleDeleteResume = () => {
    setResume(null);
  };

  return (
    <div style={styles.container}>
      <h2>Profile Settings</h2>

      {/* Profile Photo */}
      <div style={styles.section}>
        <label>Profile Photo</label><br />
        {photo && (
          <img src={photo} alt="profile" style={styles.image} />
        )}
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
      </div>

      {/* Username */}
      <div style={styles.section}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Mobile */}
      <div style={styles.section}>
        <label>Mobile Number</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Resume */}
      <div style={styles.section}>
        <label>Upload Resume</label><br />
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />

        {resume && (
          <div style={{ marginTop: "10px" }}>
            <p>{resume}</p>
            <button onClick={handleDeleteResume} style={styles.deleteBtn}>
              Delete Resume
            </button>
          </div>
        )}
      </div>

      <button onClick={handleSave} style={styles.saveBtn}>
        Save Profile
      </button>
    </div>
  );
};

const styles = {
  container: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  },
  section: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    display: "block",
    marginBottom: "10px",
  },
  saveBtn: {
    padding: "10px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "6px 10px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Profile;
