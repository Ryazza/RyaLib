const mongoose = require('mongoose');

const Code  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    frameworks: {
        type: String
    },
    import: {
        type: String
    },
    require: {
        type: String
    },
    code: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

const CodeLib = mongoose.model('code', Code);

module.exports = CodeLib;
