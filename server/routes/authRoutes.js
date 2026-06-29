const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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
    return res.status(400).json({ error: "User already Registered" });
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
  const { email, password, role } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please enter all fields." });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  if (role && role !== user.role) {
    return res.status(401).json({ error: "Invalid role for this user." });
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
const createTransporter = () => {
  if (!process.env.EMAIL_HOST) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 587),
    secure: process.env.EMAIL_SECURE === "true",
    auth:
      process.env.EMAIL_USER && process.env.EMAIL_PASS
        ? {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          }
        : undefined,
  });
};

/**
 * @route   POST /api/auth/forgot-password
 * @desc    Request a password reset token
 */
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  const user = await User.findOne({ email });
  const resetToken = crypto.randomBytes(20).toString("hex");
  const resetUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"}/reset-password?token=${resetToken}`;

  if (!user) {
    return res.status(200).json({
      message: "Password reset email sent. Check your inbox.",
    });
  }

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();

  const transporter = createTransporter();
  if (transporter) {
    try {
      await transporter.sendMail({
        from:
          process.env.EMAIL_FROM ||
          process.env.EMAIL_USER ||
          "no-reply@inventra.com",
        to: user.email,
        subject: "Inventra Password Reset",
        text: `Hello ${user.name || "User"},\n\nYou requested a password reset. Click the link below to reset your password:\n\n${resetUrl}\n\nIf you did not request this, please ignore this message.",
        html: `<p>Hello ${user.name || "User"},</p><p>You requested a password reset. Click the link below to reset your password:</p><p><a href="${resetUrl}">${resetUrl}</a></p><p>If you did not request this, please ignore this message.</p>`,
      });
    } catch (emailError) {
      console.error("Failed to send reset email:", emailError);
    }
  } else {
    console.log("Password reset email not sent because SMTP is not configured.");
    console.log("Reset URL:", resetUrl);
  }

  res.json({
    message: "Password reset email sent. Check your inbox."en,
    resetUrl,
  });
});

/**
 * @route   POST /api/auth/reset-password
 * @desc    Reset user password using a valid token
 */
router.post("/reset-password", async (req, res) => {
  const { token, password } = req.body;

  if (!token || !password) {
    return res.status(400).json({ error: "Token and password are required." });
  }

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ error: "Invalid or expired reset token." });
  }

  user.password = await bcrypt.hash(password, 10);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  res.json({ message: "Password has been reset successfully." });
});

module.exports = router;
