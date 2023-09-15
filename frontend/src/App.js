import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./components/Home";

import CreateHouse from "./components/house/CreateHouse";
import ViewHouse from './components/house/ViewHouse';
import UpdateHouse from './components/house/UpdateHouse';

import Tenant from './components/tenant/Tenant';
import CreateTenant from './components/tenant/CreateTenant';
import UpdateTenant from './components/tenant/UpdateTenant';

import AddEmployee from './components/employee/AddEmployee';
import UpdateEmployee from './components/employee/UpdateEmployee';
import Employee from './components/employee/Employee';

import Complaint from './components/complaint/Complaint';
import CreateComplaint from './components/complaint/CreateComplaint';
import UpdateComplaint from './components/complaint/UpdateComplaint';

import AdminLogin from "./components/admin/AdminLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/house" element={<ViewHouse />}></Route>
          <Route path="/house/create" element={<CreateHouse />}></Route>
          <Route path="/house/update/:id" element={<UpdateHouse />}></Route>

          <Route path='/tenant' element={<Tenant/>}></Route>
          <Route path='tenant/create' element={<CreateTenant/>}></Route>
          <Route path='tenant/update/:id' element={<UpdateTenant/>}></Route>

          <Route path='/employee' element={<Employee/>}></Route>
          <Route path='/employee/create' element={<AddEmployee/>}></Route>
          <Route path='/employee/update/:id' element={<UpdateEmployee />}></Route>
        
          <Route path="/complaint" element={<Complaint />}></Route>
          <Route path="/complaint/create" element={<CreateComplaint />}></Route>
          <Route path="/complaint/update/:id" element={<UpdateComplaint />}></Route>

          <Route path='/admin/login' element={<AdminLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
