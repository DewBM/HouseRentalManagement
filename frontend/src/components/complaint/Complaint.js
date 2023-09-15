import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Complaint () {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/complaint")
        .then(result => {setComplaints(result.data)})
        .catch(err => console.log(err));
    },[]);



    const handleDelete = (id) => {
        axios.delete("http://localhost:3000/complaint/"+id)
        .then(result => {
            console.log(result)
            window.location.reload();
        })
        .catch(err => console.log(err));
    }



    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-70 bg-white rounded p-3">
                <Link to="/complaint/create" className="btn btn-success">Add Complaint</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Description</th>
                            <th>House</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            complaints.map((complaint)=>{
                                return <tr>
                                    <td>{complaint.isDone}</td>
                                    <td>{complaint.description}</td>
                                    <td>{complaint.house}</td>
                                    <td>
                                        <Link to={`/complaint/update/${complaint._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(complaint._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Complaint;