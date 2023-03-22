import React, {useState, useEffect}from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const DetailsPage = ()=>{
    const [author, setAuthor] =useState();
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res =>{
            setAuthor(res.data);
        })
        .catch(err =>console.log(err))
    }, []);

    return(
        <div>
            <h2>Details Page</h2>
            {
                author && (
                    <div>
                        <p>{author.firstName} {author.lastName}</p>
                    </div>
                )
            }
        </div>
    )
}

export default DetailsPage;