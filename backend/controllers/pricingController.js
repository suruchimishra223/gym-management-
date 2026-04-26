import PricingPlan from '../models/PricingPlan.js';

// GET all plans
export const getAllPlans = async (req, res) => {
  try {
    const plans = await PricingPlan.find();
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new plan (optional for admin)
export const createPlan = async (req, res) => {
  try {
    const newPlan = new PricingPlan(req.body);
    await newPlan.save();
    res.status(201).json({ message: "Plan created", plan: newPlan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
