import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const DashboardPage = ()=>{
    const [authors, setAuthors] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    },[]);

    const removeFromDom = (authorIdToDelete) =>{
        setAuthors(authors.filter((author)=>author._id !== authorIdToDelete))
    };
    return(
        <div>
            <h2>Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {authors.map((author, idx) =>(
                    <tr key={idx}>
                        <td>{author.firstName} {author.lastName}</td>
                        <td>
                            <Link to={`/authors/${author._id}`}>View</Link>
                            <Link to={`/authors/${author._id}/edit`}>Edit</Link>
                            <DeleteButton authorId={author._id} successCallback={() =>removeFromDom(author._id)}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardPage;

