import express from 'express';
import resources from './resources.routes';
import skills from './skills.routes';

const router = express.Router();

// Combine all routes for the server
router.use('/resources', resources);
router.use('/skills', skills);

export default router;