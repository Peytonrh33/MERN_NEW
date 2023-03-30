import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from "../components/DeleteButton";




const DashboardPage = () =>{

    const [stores, setStores] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/stores')
            .then(res =>{
                console.log(res.data)
                setStores(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = (storeIdToDelete) =>{
        setStores(stores.filter((store) =>store._id !== storeIdToDelete))
    }
    return(
        <div>
            <h2>Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Store</th>
                        <th>Store Number</th>
                        <th>Open</th>
                        <th>Remove & View</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((stores, idx) =>(
                        <tr key={idx}>
                        <td>{stores.store}</td>
                        <td>{stores.number}</td>
                        <td>{stores.open}</td>
                        <td>
                            <DeleteButton storeId={stores._id} successCallback={() => removeFromDom(stores._id)} />
                            <Link to={`/stores/${stores._id}`}>View</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Link to={'/stores/new'}>Can't find your store?</Link>
        </div>
    );
}

export default DashboardPage;