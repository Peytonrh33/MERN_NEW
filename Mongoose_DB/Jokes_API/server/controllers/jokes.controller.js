const joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) =>{
    joke.find()
        .then((allDaJokes)=>{
            res.json({ joke : allDaJokes})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
};

module.exports.findOneJoke = (req, res) => {
    joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke : oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewJoke = (req, res) => {
    joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingJoke = (req, res) => {
    joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
        
module.exports.deleteAnExistingJoke = (req, res) => {
    joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}