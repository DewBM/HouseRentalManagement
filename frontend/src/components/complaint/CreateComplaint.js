import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateComplaint () {

    const [isDone, setIsDone] = useState();
    const [description, setDescription] = useState();
    const [house, setHouse] = useState();

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/complaint/", {isDone, description, house})
        .then(result => {
            console.log(result);
            navigate("/complaint");
        })
        .catch(err => console.log(err));
    }

    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <h2>Add Complaint</h2>
                    <div className="mb-2">
                        <label htmlFor="">Status</label>
                        <input type="text" placeholder="Fixed, Not Attended, Working On" className="form-control"
                        onChange={(e)=>setIsDone(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder="Add Description" className="form-control"
                        onChange={(e)=>setDescription(e.target.value)} />
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

export default CreateComplaint;