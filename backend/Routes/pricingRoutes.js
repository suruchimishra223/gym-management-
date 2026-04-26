import express from 'express';
import { getAllPlans, createPlan } from '../controllers/pricingController.js';

const router = express.Router();

router.get('/', getAllPlans);
router.post('/', createPlan); // optional for admin panel

export default router;
