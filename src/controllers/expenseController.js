const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {

  try {

    const expense = await Expense.create({
      ...req.body,
      userId: req.user._id
    });

    res.status(201).json(expense);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getExpenses = async (req, res) => {

  try {

    const filters = {
      userId: req.user._id
    };

    if (req.query.category) {
      filters.category = req.query.category;
    }

    if (req.query.type) {
      filters.type = req.query.type;
    }

    const expenses = await Expense.find(filters)
      .sort({ date: -1 });

    res.json(expenses);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.deleteExpense = async (req, res) => {

  try {

    await Expense.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });

    res.json({
      message: 'Expense deleted'
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};