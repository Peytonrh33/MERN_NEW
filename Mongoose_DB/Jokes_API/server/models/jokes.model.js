const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup Required"],
        minlength: [10, "Setup requires at least 10 characters"]
    },
    punchline:{
        type: String,
        required: [true, "Punchline Required"],
        minlength: [3, "Punchline requires at least 3 characters"]
    }
});



const joke = mongoose.model('Joke', JokeSchema);

module.exports = joke;