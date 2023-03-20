import React, { useEffect, useState } from 'react'
import{Link} from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Detail = (props) =>{
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <Link to={`/products/${product._id}/edit`}>Edit</Link>
            <h2>{ product.title }</h2>
            <p>{ product.price}</p>
            <p>{ product.description }</p>
        </div>
    )
}


export default Detail;