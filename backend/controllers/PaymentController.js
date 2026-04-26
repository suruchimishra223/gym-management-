import Razorpay from "razorpay";
import crypto from "crypto";
import Payment from "../Models/PaymentModels.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 🔹 Create Order
export const createOrder = async (req, res) => {
  try {
    const { amount, plan } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const options = {
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`, // ✅ useful
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);
  } catch (error) {
    console.log("Order Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Verify Payment
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
      plan,
    } = req.body;

    // ✅ signature verify
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid Signature",
      });
    }

    // ✅ Save in DB
    await Payment.create({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      amount,
      plan,
      status: "Success",
    });

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });

  } catch (error) {
    console.log("Verify Error:", error);
    res.status(500).json({ error: error.message });
  }
};