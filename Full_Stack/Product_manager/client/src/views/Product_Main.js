import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(res => {
                
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err =>console.log(err))
    }, [])

    return(
        <div>
            <ProductForm />
            <hr/>
            {products && <ProductList product = {products}/>}
        </div>
    )

}

export default Main;