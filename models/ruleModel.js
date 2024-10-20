const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
    ruleString: {
        type: String,
        required: true, 
    },
    name: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
});

module.exports = mongoose.model('Rule', ruleSchema);
