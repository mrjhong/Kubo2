import * as authController from '../controllers/userController.js';
import { Router } from 'express';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/users', authController.getUsers);

export default router;