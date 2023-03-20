import React, { useState } from 'react'
import axios from 'axios';

export default ()=>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>
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
    )
}