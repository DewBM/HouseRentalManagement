import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateTenant() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [NIC, setNIC] = useState();
    const [name, setName] = useState();
    const [dob, setDOB] = useState();
    const [tel_no, setTel] = useState();
    const [house, setHouse] = useState();

    useEffect(() => {
        axios.get("http://localhost:3000/tenant/"+id)
        .then(result => {
            setNIC(result.data.NIC);
            setName(result.data.name);
            setDOB(result.data.dob);
            setTel(result.data.tel_no);
            setHouse(result.data.house);
        })
        .catch(err => console.log(err));
    },[]);




    function update(e) {
        e.preventDefault();
        axios.put("http://localhost:3000/tenant/"+id, {NIC, name, dob, tel_no, house})
        .then(result => {
            console.log(result);
            navigate("/tenant");
        })
        .catch((err) => console.log(err));
    }



    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={update}>
                    <h2>Update Tenant</h2>
                    <div className="mb-2">
                        <label htmlFor="">NIC</label>
                        <input type="Number" placeholder="Enter NIC" className="form-control"
                            value={NIC} onChange={(e) => setNIC(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">dob</label>
                        <input type="date" placeholder="Enter DOB" className="form-control"
                            value={dob} onChange={(e) => setDOB(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">tel_no</label>
                        <input type="number" placeholder="Tel " className="form-control"
                            value={tel_no} onChange={(e) => setTel(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">House</label>
                        <input type="text" placeholder="House Id" className="form-control"
                            value={house} onChange={(e) => setHouse(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </dev>
    )
}
