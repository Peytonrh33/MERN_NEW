import React from 'react';
import {Link} from 'react-router-dom';


const ProductList = (props)=>{

    return(
        <div>
            <h2>All Products</h2>
            <ul>
                {props.product.map((product, idx) =>
                <li><Link to={`/products/${product._id}`} key={idx}>{product.title}</Link></li>
            )}
            </ul>
        </div>

    )
}

export default ProductList;