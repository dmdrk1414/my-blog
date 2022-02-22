const mongoose = require('mongoose');

// Define Schemes
const postschema = new mongoose.Schema({
    postid: { type: String, required: true, unique: true, trim: true, lowercase: true },
    category: { type: String, require: true },
    title: { type: String, required: true, default: false },
    content: { type: String, required: true },
    timestamps: { type: Date, default: Date.now },
});

// Create Model & Export
module.exports = mongoose.model('postschema', postschema);
