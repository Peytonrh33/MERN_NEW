import React, {useState, useEffect}from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

// import the form
import StoreForm from '../components/Form';


const UpdatePage = () =>{
    const nav =useNavigate();
    const {id} = useParams();

    const [oneStore, setOneStore] = useState();
    const [formErrors, setFormErrors] = useState([]);

    // there will be a useffect here to grab the user axios.get
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res =>{
                setOneStore(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])

    // there will be a update arrow function here then a axios.put
    const updateStore = (authorToUpdate) =>{
        axios.put(`http://localhost:8000/api/stores/${id}`, authorToUpdate)
            .then(() =>{
                nav('/');
            })
            .catch(err =>{
                console.log(err)
                const errorResponse = err.response.data.errors;
                console.log(errorResponse);
                setFormErrors(errorResponse);
            });
    }

    return(
        <div>
            <h2>Update Page</h2>
            {oneStore && <StoreForm submitFormInformation= {updateStore} errors={formErrors} store={oneStore} />}
        </div>
    );
}

export default UpdatePage;