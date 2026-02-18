const express = require("express");
const router = express.Router();
const User = require("../models/User");
const multer = require("multer");

/* Upload Config */

const photoStorage = multer.diskStorage({
  destination: "uploads/photos",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const resumeStorage = multer.diskStorage({
  destination: "uploads/resumes",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const uploadPhoto = multer({ storage: photoStorage });
const uploadResume = multer({ storage: resumeStorage });

/* User Routes */

// Get single user
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Update profile
router.post("/update/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});

// Upload photo
router.post("/upload-photo/:id", uploadPhoto.single("photo"), async (req, res) => {
  const user = await User.findById(req.params.id);
  user.photo = req.file.filename;
  await user.save();
  res.json({ message: "Photo uploaded" });
});

// Upload resume
router.post("/upload-resume/:id", uploadResume.single("resume"), async (req, res) => {
  const user = await User.findById(req.params.id);
  user.resume = req.file.filename;
  await user.save();
  res.json({ message: "Resume uploaded" });
});

/* Admin Controls */

// Get all users
router.get("/all/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Delete user
router.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

// Change role
router.put("/role/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.role = req.body.role;
  await user.save();
  res.json({ message: "Role updated" });
});

module.exports = router;
