import React, {useState}from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StoreForm from '../components/Form';


const CreatePage = () =>{
    const nav = useNavigate();

    const [formErrors, setFormErrors] = useState([])

    const createStore = (newStore) =>{
        axios.post('http://localhost:8000/api/stores', newStore)
            .then((res) =>{
                nav('/');
            })
            .catch((err) => {
                console.log(err)
                // for errors in a minute
                const errorResponse = err.response.data.errors;
                setFormErrors(errorResponse);
            });
    }

    return(
        <div>
            <h2>Add a new Store!</h2>
            <StoreForm submitFormInformation={createStore} errors={formErrors} store={{store: '', number: '', open:''}} />
        </div>
    );
}

export default CreatePage;