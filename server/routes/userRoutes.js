const express = require("express");
const User = require("../models/User");
const { authenticate } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get list of registered users (Administrator only)
 */
router.get(
  "/",
  authenticate,
  authorize(["Administrator"]),
  async (req, res) => {
    const users = await User.find().select("-password");
    res.json(users);
  },
);

/**
 * @route   PATCH /api/users/:id/role
 * @desc    Update user role (Administrator only)
 */
router.patch(
  "/:id/role",
  authenticate,
  authorize(["Administrator"]),
  async (req, res) => {
    const { role } = req.body;
    if (
      !role ||
      !["Administrator", "Inventory Manager", "Sales Manager"].includes(role)
    ) {
      return res.status(400).json({ error: "Invalid role value." });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    user.role = role;
    await user.save();

    res.json({
      message: "Role updated successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  },
);

module.exports = router;
