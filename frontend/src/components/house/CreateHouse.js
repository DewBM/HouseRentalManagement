import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateHouse () {

    const [address, setAddress] = useState();
    const [n_rooms, setRooms] = useState();
    const [n_bathrooms, setBathrooms] = useState();
    const [rent, setRent] = useState();

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/house/", {address, n_rooms, n_bathrooms, rent})
        .then(result => {
            console.log(result);
            navigate("/house");
        })
        .catch(err => console.log(err));
    }

    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <h2>Add House</h2>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Enter Address" className="form-control"
                        onChange={(e)=>setAddress(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Rooms</label>
                        <input type="number" placeholder="Number of Rooms" className="form-control"
                        onChange={(e)=>setRooms(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Bathrooms</label>
                        <input type="number" placeholder="Number of Bathrooms" className="form-control"
                        onChange={(e)=>setBathrooms(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Rent</label>
                        <input type="number" placeholder="Monthly Rent" className="form-control"
                        onChange={(e)=>setRent(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </dev>
    )
}

export default CreateHouse;