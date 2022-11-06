
import * as ResourcesService from '../services/resources.service';
import express from 'express';
import fs from 'fs';
import { BAD_REQUEST_RESPONSE } from '../helpers/errors';
import { resumeUpload } from '../helpers/multer';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const resources = await ResourcesService.readResources();
    res.send(resources);
  })
  .post(async (req, res, next) => {
    const [err, resource] = await ResourcesService.createResource(req.body.data);
    if (err) return next(err);
    res.status(201).send(resource);
  });

router.route('/table')
  .get(async (req, res) => {
    const search = req.query.search || '';
    const skillsQuery = req.query.skills || '';
    const separator = req.query.separator || ',';
    const skills = skillsQuery.split(separator).map(skill => skill.trim());
    const countSkills = (resource) => {
      const Skills = new Set(resource.Skills);
      return skills.reduce((a, c) => Skills.has(c) ? a+1 : a, 0);
    };
    const defaultSort = (a, b) => getName(a).localeCompare(getName(b));
    const getName = ({FirstName, LastName}) => `${FirstName} ${LastName}`;
    const resources = await ResourcesService.readResources({
      projection: [
        'Id', 'FirstName', 'LastName', 'Role', 'Email', 'Skills'
      ],
      skip: req.query.skip,
      top: req.query.top,
      page: true,
      selection: (resource =>
        getName(resource).toLowerCase().includes(search.toLowerCase()) ||
        resource.Role.toLowerCase().includes(search.toLowerCase())
      ),
      sort: (skills.length ? ((a, b) => (countSkills(b) - countSkills(a)) || defaultSort(a, b))  : defaultSort)
    });
    res.send(resources);
  });

router.route('/:id')
  .get(async (req, res, next) => {
    const [err, resource] = await ResourcesService.readResourceById(req.params.id);
    if (err) return next(err);
    res.send(resource);
  })
  .put(async (req, res, next) => {
    const [err, resource] = await ResourcesService.updateResource(req.params.id, req.body.data);
    if (err) return next(err);
    res.send(resource);
  })
  .delete(async (req, res, next) => {
    const [err, resource] = await ResourcesService.deleteResource(req.params.id);
    if (err) return next(err);
    res.send(resource);
  });

router.route('/:id/resume')
  .get(async (req, res, next) => {
    const [err, path] = await ResourcesService.verifyResumeExists(req.params.id);
    if (err) return next(err);
    res.set({
      'Content-Type': 'application/pdf',
      'Accept': 'application/json'
    });
    res.download(path, 'resume.pdf');
  })
  .post(resumeUpload.single('resume'), (req, res, next) => {
    if (req.invalidFile) return next(BAD_REQUEST_RESPONSE(req.invalidFile));
    if (req.file.size > 1000**2*2) return next(BAD_REQUEST_RESPONSE('File too large'));
    res.status(204).end();
  })
  .head(async (req, res, next) => {
    const [err, path] = await ResourcesService.verifyResumeExists(req.params.id, true);
    if (err) return next(err);
    const stats = fs.statSync(path);
    res.set({
      'Content-Type': 'application/pdf',
      'Accept': 'application/json',
      'Content-Disposition': 'attachment; filename="resume.pdf"',
      'Content-Length': stats.size
    });
    res.status(200).end();
  });

export default router;