const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const SECRET = "mern_secret";

/* Image Upload */
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

/* Register */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const exist = await User.findOne({ email });
  if (exist) return res.json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashed
  });

  await user.save();
  res.json({ message: "Registered Successfully" });
});

/* Login */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1d" });

  res.json({
    token,
    userId: user._id
  });
});

/* Get User */
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

/* Upload Profile Image */
router.post("/upload/:id", upload.single("image"), async (req, res) => {
  const user = await User.findById(req.params.id);
  user.profileImage = req.file.filename;
  await user.save();
  res.json({ message: "Image uploaded" });
});

/* Add Skill */
router.post("/add-skill/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.skills.push(req.body.skill);
  await user.save();
  res.json(user.skills);
});

/* Add Project */
router.post("/add-project/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.projects.push(req.body);
  await user.save();
  res.json(user.projects);
});


router.post("/update-bio/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.bio = req.body.bio;
  await user.save();
  res.json({ message: "Bio updated" });
});


module.exports = router;

