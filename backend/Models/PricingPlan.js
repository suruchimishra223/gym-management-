import mongoose from 'mongoose';

const pricingPlanSchema = new mongoose.Schema({
  title: String,
  price: Number,
  length: Number,
  features: [String],
  imgUrl: String,
  popular: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("PricingPlan", pricingPlanSchema);
