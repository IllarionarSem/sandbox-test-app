const express = require('express');
const router = express.Router();
const Record = require('../models/Record');

router.get('/', async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch records' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newRecord = new Record({ title, description });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create record' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Record.findByIdAndDelete(id);
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete record' });
  }
});

module.exports = router;
