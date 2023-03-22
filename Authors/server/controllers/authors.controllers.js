const {Author} = require('../models/authors.models')

module.exports.createAuthor = (req, res) =>{
    const {firstName, lastName} = req.body;
    Author.create({
        firstName,
        lastName
    })
        .then(author => res.json(author))
        .catch(err => {
            res.status(400).json({message: "SUMIN WENT WRONG!!", err})
        });
}

module.exports.getAllAuthors = (req, res) =>{
    Author.find()
        .then(Author =>res.json(Author))
        .catch(err => {
            res.status(400).json({message: "SUMIN WENT WRONG!!", err})
        });
}

module.exports.getOneAuthor = (req, res) =>{
    Author.findOne({_id:req.params.id})
        .then(Author => res.json(Author))
        .catch(err => {
            res.status(400).json({message: "SUMIN WENT WRONG!!", err})
        });
}

module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => {
            res.status(400).json({message: "SUMIN WENT WRONG!!", err})
        });
}
module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => {
            res.status(400).json({message: "SUMIN WENT WRONG!!", err})
        });
}