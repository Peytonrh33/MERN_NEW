import React from "react";
import axios from 'axios';




const DeleteButton = (props) =>{

    const {storeId, successCallback} = props

    const deleteStore = () =>{
        axios.delete(`http://localhost:8000/api/stores/${storeId}`)
        .then(() =>{
            successCallback();
        })
        .catch(err => console.log(err));
    };


    return (
        <button onClick={deleteStore}>DELETE</button>
    );
}

export default DeleteButton;