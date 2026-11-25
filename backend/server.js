
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authroutes");
const taskRoutes = require("./routes/taskroutes");
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Authentication Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("TaskBuddy Backend is running!");
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
