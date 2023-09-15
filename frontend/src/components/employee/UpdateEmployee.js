import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function UpdateEmployee() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [empId, setEmpId] = useState();
    const [name, setName] = useState();
    const [dob, setDoB] = useState();
    const [salary, setSalary] = useState();
    const [house, setHouse] = useState();

    useEffect(() => {
        axios.get("http://localhost:3000/employee/"+id)
        .then(result => {
            setEmpId(result.data.empId);
            setName(result.data.name);
            setDoB(result.data.dob);
            setSalary(result.data.salary);
            setHouse(result.data.house);
        })
        .catch(err => console.log(err));
    },[]);




    function update(e) {
        e.preventDefault();
        axios.put("http://localhost:3000/employee/"+id, {empId, name, dob, salary, house})
        .then(result => {
            console.log(result);
            navigate("/employee");
        })
        .catch((err) => console.log(err));
    }



    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={update}>
                    <h2>Update Employee</h2>
                    <div className="mb-2">
                        <label htmlFor="">ID</label>
                        <input type="text" placeholder="Enter Employee Id" className="form-control"
                            value={empId} onChange={(e) => setEmpId(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Enter DOB</label>
                        <input type="text" placeholder="Date of Birth" className="form-control"
                            value={dob} onChange={(e) => setDoB(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Salary</label>
                        <input type="number" placeholder="Enter Salary" className="form-control"
                            value={salary} onChange={(e) => setSalary(e.target.value)} />
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
