import * as SkillsService from '../services/skills.service';
import express from 'express';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const resources = await SkillsService.readSkills();
    res.send(resources);
  });

export default router;