const express = require('express');
const router = express.Router();
const { createRule, getRules, updateRule, deleteRule } = require('../controllers/ruleController');


router.post('/', createRule);

router.get('/', getRules);

router.put('/:id', updateRule);

router.delete('/:id', deleteRule);


module.exports = router;
