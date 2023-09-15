
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Tenant() {

    const [tenants, setTenant] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/tenant")
        .then(result => {setTenant(result.data)})
        .catch(err => console.log(err));
    },[]);



    const handleDelete = (id) => {
        axios.delete("http://localhost:3000/tenant/"+id)
        .then(result => {
            console.log(result)
            window.location.reload();
        })
        .catch(err => console.log(err));
    }



    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-70 bg-white rounded p-3">
                <Link to="/tenant/create" className="btn btn-success">Add tenant</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>NIC</th>
                            <th>Name</th>
                            <th>DoB</th>
                            <th>Tel No</th>
                            <th>House</th>
                            <th>Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tenants.map((tenant)=>{
                                return <tr>
                                    <td>{tenant.NIC}</td>
                                    <td>{tenant.name}</td>
                                    <td>{tenant.dob}</td>
                                    <td>{tenant.tel_no}</td>
                                    <td>{tenant.house}</td>
                                    <td>
                                        <Link to={`/tenant/update/${tenant._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(tenant._id)}>Delete</button>
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
