const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "DON'T YOU DARE LEAVE IT BLANK"],
        minlength: [3, "AT LEAST 3 CHARACTERS!!!!!"]
    },
    lastName: {
        type: String,
        required: [true, "DON'T YOU DARE LEAVE IT BLANK"],
        minlength: [3, "AT LEAST 3 CHARACTERS!!!!!"]
    }
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);