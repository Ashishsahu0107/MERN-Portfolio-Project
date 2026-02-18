const User = require('../models/User');

// Get Profile
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Profile
const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user);

        if (user) {
            user.name = req.body.name || user.name;

            if (req.file) {
                user.profileImage = req.file.filename;
            }

            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProfile,
    updateProfile
};
