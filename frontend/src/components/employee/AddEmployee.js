import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {
    const [empId, setEmpId] = useState();
    const [name, setName] = useState();
    const [dob, setDoB] = useState();
    const [salary, setSalary] = useState();
    const [house, setHouse] = useState();

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/employee/", {empId, name, dob, salary, house})
        .then(result => {
            console.log(result);
            navigate("/employee");
        })
        .catch(err => console.log(err));
    }

    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <h2>Add Employees</h2>
                    <div className="mb-2">
                        <label htmlFor="">Employee Id</label>
                        <input type="text" placeholder="Enter Employee Id" className="form-control"
                        onChange={(e)=>setEmpId(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date of Birth</label>
                        <input type="date" placeholder="Enter date of birth" className="form-control"
                        onChange={(e)=>setDoB(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Salary</label>
                        <input type="number" placeholder="Monthly Salary" className="form-control"
                        onChange={(e)=>setSalary(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">House</label>
                        <input type="text" placeholder="Enter house Id" className="form-control"
                        onChange={(e)=>setHouse(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </dev>
    )
}
