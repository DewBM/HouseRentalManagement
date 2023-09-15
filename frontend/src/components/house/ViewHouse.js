import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewHouse () {
    /*{
        address: "Suncity", n_rooms: 3, n_bathrooms: 2, rental: 130000, tenant: "Pehan"
    }*/
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/house")
        .then(result => {setHouses(result.data)})
        .catch(err => console.log(err));
    },[]);



    const handleDelete = (id) => {
        axios.delete("http://localhost:3000/house/"+id)
        .then(result => {
            console.log(result)
            window.location.reload();
        })
        .catch(err => console.log(err));
    }



    return (
        <dev className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-70 bg-white rounded p-3">
                <Link to="/house/create" className="btn btn-success">Add House</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Rooms</th>
                            <th>Bathrooms</th>
                            <th>Rent</th>
                            <th>Current Occupant</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            houses.map((house)=>{
                                return <tr>
                                    <td>{house.address}</td>
                                    <td>{house.n_rooms}</td>
                                    <td>{house.n_bathrooms}</td>
                                    <td>{house.rent}</td>
                                    <td>{house.tenant}</td>
                                    <td>
                                        <Link to={`/house/update/${house._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(house._id)}>Delete</button>
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

export default ViewHouse;