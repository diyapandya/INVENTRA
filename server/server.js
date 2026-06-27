require('dotenv').config(); // Load environment variables from .env
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Initialize Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Inventra Inventory Intelligence Backend connected with MongoDB Atlas.');
});
