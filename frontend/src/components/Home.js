import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-70 bg-white rounded p-3">
            <Link to="/tenant/tenantAuth" className="btn btn-success">Continue as a Tenant</Link>
            <Link to="/admin/login" className="btn btn-success">Continue as Admin</Link>
        </div>
    </div>
    )
}

export default Home;








// import React from 'react'
// import Button from './Button'
// import './Home.css'

// export default function Home() {
//   return (
//     <div className='Box'>

//          <Button Name="Admin"/>

//         <Button Name="Tennt"/>

   
//     </div>
//   )
// }