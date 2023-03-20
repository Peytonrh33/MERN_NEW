import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = ()=>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res =>{
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, [])

    const updateProduct = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res =>console.log(res))
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <h2>Update Product</h2>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                </div>
                <div>
                <label>Price</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
                </div>
                <div>
                <label>Description</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
// dergedhgbedrthbgdrt
export default Update;