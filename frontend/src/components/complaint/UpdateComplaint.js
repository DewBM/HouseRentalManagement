import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateComplaint () {

    const navigate = useNavigate();
    const {id} = useParams();

    const [isDone, setIsDone] = useState();
    const [description, setDescription] = useState();
    const [house, setHouse] = useState();

    useEffect(() => {
        axios.get("http://localhost:3000/complaint/"+id)
        .then(result => {
            setIsDone(result.data.isDone);
            setDescription(result.data.description);
            setHouse(result.data.house);
        })
        .catch(err => console.log(err));
    },[]);




    function update(e) {
        e.preventDefault();
        axios.put("http://localhost:3000/complaint/"+id, {isDone, description, house})
        .then(result => {
            console.log(result);
            navigate("/complaint");
        })
        .catch((err) => console.log(err));
    }



    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={update}>
                    <h2>Update Complaint</h2>
                    <div className="mb-2">
                        <label htmlFor="">Status</label>
                        <input type="text" placeholder="Fixed, Not Attended, Working On" className="form-control"
                            value={isDone} onChange={(e) => setIsDone(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder="Add Description" className="form-control"
                            value={description} onChange={(e) => setDescription(e.target.value)} />
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

export default UpdateComplaint;