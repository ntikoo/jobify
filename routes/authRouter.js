import express from 'express';
import { login, register,logout } from '../controllers/authController.js';

import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';
const router = express.Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logout);

export default router;
