require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const path = require("path");

const { router } = require("./routes/auth");
const waterbodyRoutes = require("./routes/waterbodies");
const siteRoutes = require("./routes/sites");
const commentRoutes = require("./routes/comments");
const userRoutes = require("./routes/users");
const weatherRoutes = require("./routes/weather");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const isProduction = process.env.NODE_ENV === "production";

app.use(
  cors({
    origin: isProduction
      ? process.env.CLIENT_ORIGIN
      : ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "cmpt315_lakewatch_project",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));


app.use("/api/auth", router);
app.use("/api/waterbodies", waterbodyRoutes);
app.use("/api/sites", siteRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/weather", weatherRoutes);

// Serve built client in production
if (isProduction) {
  const clientDist = path.join(__dirname, "../client/dist");
  app.use(express.static(clientDist));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
} else {
  app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
  });
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
