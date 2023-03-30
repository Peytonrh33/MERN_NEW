// !!! if there is no details/view one page just delete this
import React, {useState, useEffect}from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


const DetailsPage = () =>{
    const [store, setStore] =useState();
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res =>{
                setStore(res.data);
            })
            .catch(err =>{
                console.log(err)
            });
    }, []);


    return(
        <div>
            <h2>Details Page</h2>
            {
                store && (
                    <div>
                        <p>Store: {store.store}</p>
                        <p>Store Number: {store.number}</p>
                        <p>Open: {store.open}</p>
                        <Link to={`/stores/${store._id}/edit`}>Edit Store Details</Link>
                    </div>
                )
            }
        </div>
    );
}

export default DetailsPage;