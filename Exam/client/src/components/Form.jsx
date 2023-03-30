import React, {useState} from "react";



const StoreForm = (props) =>{
    console.log(props)
const [store, setStore] = useState(props.store.store);
const [number, setNumber] = useState(props.store.number);
const [open, setOpen] = useState(props.store.open);

const {errors} = props


const handleSubmit = (e) =>{
    e.preventDefault();

    const storeInfo = {
        store,
        number,
        open
    }

    props.submitFormInformation(storeInfo);
}


    return(
        <form onSubmit={handleSubmit}>
                <div>
                    <label>Store:</label>
                    <input onChange={(e) => setStore(e.target.value)} value={store} />
                    {errors.store && <p>{errors.store.message}</p>}
                </div>
                <div>
                    <label>Store Number:</label>
                    <input type='number' onChange={(e) => setNumber(e.target.value)} value={number} />
                    {errors.number && <p>{errors.number.message}</p>}
                </div>
                <div>
                    <label>Open:</label>
                    <input onChange={(e) => setOpen(e.target.value)} value={open} />
                    {errors.open && <p>{errors.open.message}</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
    );
}

export default StoreForm;