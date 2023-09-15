import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

function AdminLogin() {
    return(
        <div>
            <h1>Admin Athentication</h1>
            <Login/>
            <Register/>
            <div>
                <Link to="/home"><h3>Go to Home</h3></Link>
            </div>
        </div>
    )
}



function Login(){

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    //const [_, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const onSubmit = async(event)=>{
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/adminAuth/login", {
                username, 
                password
            });

            //setCookies("access_token", response.data.token);
            //window.localStorage.setItem("userID", response.data.userId);
            //navigate("/student/homepage");
            // Show userId in local storage

            localStorage.setItem("token", response.data);
			window.location = "/admin/homepage";
            
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Form 
            username={username} 
            setUsername={setUsername} 
            password={password} 
            setpassword={setpassword}
            label= "Login"
            onSubmit={onSubmit}
        />
    )
}


function Register(){

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const onSubmit = async (event) => {

        console.log("register called");
        console.log(username);
        
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/adminAuth/register", {username, password});
            alert("Registration Completed! Now login");
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <Form 
            username={username} 
            setUsername={setUsername}
            password={password} 
            setpassword={setpassword}
            label= "Register"
            onSubmit={onSubmit}
        />
    )
}



// Use props
function Form({username, setUsername, password, setpassword , label, onSubmit}){
    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2> {label} </h2>
                <div>
                    <label htmlFor="username"> Username:</label>
                    <input type="text" id="username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password"> Password:</label>
                    <input type="password" id="password" value={password} onChange={(event)=>setpassword(event.target.value)}/>
                </div>

                <button type="submit"> {label} </button>

            </form>
        </div>
    )
}



export default AdminLogin;