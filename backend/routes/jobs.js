const express = require('express');
const Job = require('../models/Job');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.use(auth);

router.post('/', async (req, res) => {
  const job = await Job.create({ ...req.body, createdBy: req.userId });
  res.status(201).json(job);
});

router.get('/', async (req, res) => {
  const jobs = await Job.find({ createdBy: req.userId });
  res.json(jobs);
});

router.put('/:id', async (req, res) => {
  const job = await Job.findOneAndUpdate({ _id: req.params.id, createdBy: req.userId }, req.body, { new: true });
  res.json(job);
});

router.delete('/:id', async (req, res) => {
  await Job.findOneAndDelete({ _id: req.params.id, createdBy: req.userId });
  res.json({ message: 'Deleted' });
});

module.exports = router;
