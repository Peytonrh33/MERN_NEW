import React from "react";
import axios from 'axios';


const DeleteButton = (props) =>{
    const {authorId, successCallback} = props

    const deleteAuthor = (authorToDelete) =>{
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(res=>{
            successCallback();
            // setAuthors(authors.filter((author)=>author._id !== authorToDelete._id))
        })
        .catch(err=>console.log(err));
    };

    return (<button onClick={deleteAuthor}>DELETE</button>);


}

export default DeleteButton;