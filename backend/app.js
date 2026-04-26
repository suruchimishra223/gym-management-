import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Razorpay from "razorpay";

import UserRoutes from "./routes/UserRoutes.js";
import EmailRoutes from "./routes/EmailRoutes.js";
import PaymentRoutes from "./routes/paymentRoutes.js"; // ✅ ADD THIS

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Razorpay instance
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Routes
app.use("/api/users", UserRoutes);
app.use("/api/email", EmailRoutes);
app.use("/api/payment", PaymentRoutes); // ✅ ADD THIS

// Test route
app.get("/", (req, res) => {
  res.send("Backend with Razorpay is running 🚀");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));