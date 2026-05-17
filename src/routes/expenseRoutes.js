const express = require('express');

const router = express.Router();

const protect = require('../middleware/authMiddleware');

const {
  createExpense,
  getExpenses,
  deleteExpense
} = require('../controllers/expenseController');

router.use(protect);

router.post('/', createExpense);

router.get('/', getExpenses);

router.delete('/:id', deleteExpense);

module.exports = router;