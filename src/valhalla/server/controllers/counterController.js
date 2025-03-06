const Counter = require('../models/Counter');

exports.createCounter = async (req, res) => {
  try {
    const newCounter = new Counter({
      name: req.body.name,
      experience: req.body.experience
    });
    await newCounter.save();
    await Counter.updateOne({}, { $inc: { count: 1 } }); // Zähler erhöhen
    res.status(201).json(newCounter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};