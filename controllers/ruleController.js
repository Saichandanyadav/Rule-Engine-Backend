const Rule = require('../models/ruleModel');


const createRule = async (req, res) => {
    const { ruleString, name, description } = req.body;

    try {
        const newRule = await Rule.create({ ruleString, name, description });
        res.status(201).json(newRule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getRules = async (req, res) => {
    try {
        const rules = await Rule.find();
        res.status(200).json(rules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateRule = async (req, res) => {
    const { id } = req.params;
    const { ruleString, name, description } = req.body;

    try {
        const rule = await Rule.findByIdAndUpdate(
            id,
            { ruleString, name, description },
            { new: true, runValidators: true }
        );

        if (!rule) {
            return res.status(404).json({ message: 'Rule not found' });
        }

        res.status(200).json(rule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteRule = async (req, res) => {
    const { id } = req.params;

    try {
        const rule = await Rule.findByIdAndDelete(id);

        if (!rule) {
            return res.status(404).json({ message: 'Rule not found' });
        }

        res.status(204).send(); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createRule,
    getRules,
    updateRule,
    deleteRule,
};
