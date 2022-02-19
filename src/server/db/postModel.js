const mongoose = require('mongoose');

// Define Schemes
const postSchema = new mongoose.Schema({
    postid: { type: Number, required: true, unique: true },
    title: { type: String, required: true, default: false },
    content: { type: String, required: true },
    timestamps: { type: Date, default: Date.now },
});

// Create Model & Export
module.exports = mongoose.model('Post', postSchema);
