const mongoose = require('mongoose');

// Define Schemes
const categorySchema = new mongoose.Schema({
    category: [
        {
            content: { type: String, unique: true },
        },
    ],
});

// Create Model & Export
module.exports = mongoose.model('categorySchema', categorySchema);
// [{ type: String, unique: true }]
