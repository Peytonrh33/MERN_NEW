const mongoose = require('mongoose');

// replacemeSchema and then there is another REPLACEME that you will change ex. Author, Product

const StoreSchema = mongoose.Schema({
    store:{
        type: String,
        required:[true, "Must have a name for the store"],
        minlength:[3, "Must have at least 3 characters"]
    },
    number:{
        type: Number,
        required: [true, "Must have a store number"],
        minlength: [2, "Store numbers are at least 5 numbers bud"]
    },
    open:{
        type: String,
        required: [true, "Must say yes or no"],
        minlength:[2, "Gotcha there, gotta be yay or nay"]
    }

}, {timestamps: true});

module.exports = mongoose.model('Store', StoreSchema);