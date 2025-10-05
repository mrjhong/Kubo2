import * as movieController from '../controllers/movieController.js';
import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.get('/', movieController.getMovies);
router.get('/news', movieController.getNewsMovies);
router.get('/show/:id',authMiddleware, movieController.showMovie);
router.post('/',authMiddleware, movieController.createMovie);

export default router;