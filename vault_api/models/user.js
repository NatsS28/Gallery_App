const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    productImage: { type: String, required: true }
}, { timestamps: true })


const User = mongoose.model('User', userSchema);

module.exports = User;