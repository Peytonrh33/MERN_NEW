import React, {useState, useEffect}from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

import AuthorForm from '../components/AuthorForm';


const UpdatePage = ()=>{
    const nav =useNavigate();
    const {id} = useParams();

    const [oneAuthor, setOneAuthor] = useState();
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then( res =>{
            const author = res.data;
            setOneAuthor(author)
        })
        .catch(err =>console.log(err))
    }, [])

    const updateAuthor = (authorToUpdate) =>{

        axios.put(`http://localhost:8000/api/authors/${id}`, authorToUpdate)
        .then((result) =>{
            nav(`/authors`);
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
            <h2>Update Page</h2>
            {oneAuthor && <AuthorForm submitFormInformation={updateAuthor} errors={formErrors} author={oneAuthor} />}
        </div>
    )
}

export default UpdatePage;