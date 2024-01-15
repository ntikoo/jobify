import { Router } from 'express';
import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  getSingleJob,
  showStats,
} from '../controllers/jobController.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
const router = Router();
router
  .route('/')
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getSingleJob)
  .patch(checkForTestUser, validateIdParam, validateJobInput, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
