import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import AuthorForm from '../components/AuthorForm';

const CreatePage = ()=>{
    const nav =useNavigate();

    const [formErrors, setFormErrors] = useState([]);

    const createAuthor = (newAuthor) =>{


        axios.post('http://localhost:8000/api/authors', newAuthor)
        .then((res) =>{
            nav('/authors');
            console.log(res);
        })
        .catch((err) =>{
            // ========================================================================================Error formula doo hickey
            console.log(err);
            const errorResponse = err.response.data.err.errors;
                setFormErrors(errorResponse);
            });
    }

    return(
        <div>
            <h2>Create Author</h2>
            <AuthorForm submitFormInformation={createAuthor} errors={formErrors} author={{firstName: '', lastName: ''}}  />
        </div>
    )
}


export default CreatePage;