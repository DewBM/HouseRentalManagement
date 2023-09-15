import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTenant() {
 
    const [NIC, setNIC ]= useState();
    const [name, setName] = useState();
    const [dob, setDOB] = useState();
    const [tel_no, setTel] = useState();
    const [house, setHouse] = useState();

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/tenant/", {NIC, name, dob, tel_no, house})
        .then(result => {
            console.log(result);
            navigate("/tenant");
        })
        .catch(err => console.log(err));
    }

    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <h2>Add tenant</h2>
                    <div className="mb-2">
                        <label htmlFor="">NIC</label>
                        <input type="text" placeholder="Enter NIC" className="form-control"
                        onChange={(e)=>setNIC(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">setDOB</label>
                        <input type="date" placeholder="Enter DOB" className="form-control"
                        onChange={(e)=>setDOB(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">setTel</label>
                        <input type="number" placeholder="Tel No" className="form-control"
                        onChange={(e)=>setTel(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">House</label>
                        <input type="text" placeholder="House Id" className="form-control"
                        onChange={(e)=>setHouse(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </dev>
    )
}
