import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import jwt from "jsonwebtoken";
import authRoutes from "./routes/auth.js";
import pool from "./db/database.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

app.use("/api/", authRoutes);

app.use("/api/", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
