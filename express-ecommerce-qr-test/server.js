import express from "express";
import usersRoute from "./routes/users.js";

const app = express();
const PORT = 3000;

/* -------- Middleware -------- */
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* -------- Routes -------- */
app.use("/users", usersRoute);

/* -------- Health Check -------- */
app.get("/", (req, res) => {
  res.send("🚀 Express + Redis API is running");
});

/* -------- Start Server -------- */
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
