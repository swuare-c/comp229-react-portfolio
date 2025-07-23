import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

import contactRoutes from "./server/routes/contact.routes.js";
import projectRoutes from "./server/routes/project.routes.js";
import qualificationRoutes from "./server/routes/qualification.routes.js";
import userRoutes from "./server/routes/user.routes.js";
import authRoutes from "./server/routes/auth.routes.js";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri)
  .then(() => console.log("Connected to database"))
  .catch(err => console.error("Database connection error:", err));

mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualification", qualificationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend API working: Portfolio Project" });
});

app.listen(config.port, (err) => {
  if (err) console.error("Server error:", err);
  console.info(`Server running at http://localhost:${config.port}`);
});
