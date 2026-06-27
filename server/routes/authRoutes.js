const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role, email: user.email },
    process.env.JWT_SECRET || "inventra-secret",
    { expiresIn: "8h" },
  );
};

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 */
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role: role || "Inventory Manager",
  });

  await newUser.save();

  res.status(201).json({
    message: "Registration successful",
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  });
});

/**
 * @route   POST /api/auth/login
 * @desc    Login and retrieve a JWT token
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please enter all fields." });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const token = generateToken(user);

  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

module.exports = router;
