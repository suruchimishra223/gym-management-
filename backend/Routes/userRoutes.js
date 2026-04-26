import express from 'express';
import { register, login } from '../controllers/userController.js';  // ✅ small u, small c
import {
  createHome,
  getAllHome,
  getGymHomeById,
  updateHome,
  deleteHome,
} from '../controllers/homeController.js';  // ✅ small h, small c
import upload from '../middlewares/upload.js';

const router = express.Router();

// ✅ User Routes
router.post('/register', register);
router.post('/login', login);

// ✅ Gym Home Routes
router.post('/gym-home', upload.single('bannerImage'), createHome);
router.get('/gym-home', getAllHome);
router.get('/gym-home/:id', getGymHomeById);
router.put('/gym-home/:id', upload.single('bannerImage'), updateHome);
router.delete('/gym-home/:id', deleteHome);

export default router;