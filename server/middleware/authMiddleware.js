const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const token =
    authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

  if (!token) {
    return res.status(401).json({ error: "Authentication token required." });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "inventra-secret",
    );
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ error: "Invalid token." });
    }

    req.user = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
};

module.exports = {
  authenticate,
};
