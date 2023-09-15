import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateHouse () {

    const navigate = useNavigate();
    const {id} = useParams();

    const [address, setAddress] = useState();
    const [n_rooms, setRooms] = useState();
    const [n_bathrooms, setBathrooms] = useState();
    const [rent, setRent] = useState();
    const [tenant, setTenant] = useState();

    useEffect(() => {
        axios.get("http://localhost:3000/house/"+id)
        .then(result => {
            setAddress(result.data.address);
            setRooms(result.data.n_rooms);
            setBathrooms(result.data.n_bathrooms);
            setRent(result.data.rent);
        })
        .catch(err => console.log(err));
    },[]);




    function update(e) {
        e.preventDefault();
        axios.put("http://localhost:3000/house/"+id, {address, n_rooms, n_bathrooms, rent, tenant})
        .then(result => {
            console.log(result);
            navigate("/house");
        })
        .catch((err) => console.log(err));
    }



    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={update}>
                    <h2>Update House</h2>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Enter Address" className="form-control"
                            value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Rooms</label>
                        <input type="number" placeholder="Number of Rooms" className="form-control"
                            value={n_rooms} onChange={(e) => setRooms(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Bathrooms</label>
                        <input type="number" placeholder="Number of Bathrooms" className="form-control"
                            value={n_bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Rent</label>
                        <input type="number" placeholder="Monthly Rent" className="form-control"
                            value={rent} onChange={(e) => setRent(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Occupant</label>
                        <input type="text" placeholder="Occupant of the house" className="form-control"
                            value={tenant} onChange={(e) => setTenant(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </dev>
    )
}

export default UpdateHouse;