import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const ProductList = (props)=>{
    const {removeFromDom} = props;

    const deletePerson = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res =>{
            removeFromDom(id)
        })
        .catch(err=> console.error(err));
    }

    return(
        <div>
            <h2>All Products</h2>
            <ul>
                {props.product.map((product, idx) =>{
                return<li>
                    <Link to={`/products/${product._id}`} key={idx}>{product.title}</Link>
                    |
                    <button onClick={(e)=>{deletePerson(product._id)}}>Delete</button>
                </li>

                })}
            </ul>
        </div>

    )
}

export default ProductList;