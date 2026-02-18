const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Save contact form data
router.post("/add", async (req, res) => {
  try {
    const { fullName, mobile, email, message } = req.body;

    const newContact = new Contact({
      fullName,
      mobile,
      email,
      message
    });

    await newContact.save();

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending message" });
  }
});

module.exports = router;
