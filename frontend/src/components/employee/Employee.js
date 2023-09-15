import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Employee() {
    const [employees, setEmployee] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/employee")
        .then(result => {setEmployee(result.data)})
        .catch(err => console.log(err));
    },[]);



    const handleDelete = (id) => {
        axios.delete("http://localhost:3000/employee/"+id)
        .then(result => {
            console.log(result)
            window.location.reload();
        })
        .catch(err => console.log(err));
    }



    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-70 bg-white rounded p-3">
                <Link to="/employee/create" className="btn btn-success">Add employee</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>EmpID</th>
                            <th>Names</th>
                            <th>Dob</th>
                            <th>Salary</th>
                            <th>House</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee)=>{
                                return <tr>
                                    <td>{employee.empId}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.dob}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.house}</td>
                                    <td>
                                        <Link to={`/employee/update/${employee._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(employee._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </dev>
    )
}
