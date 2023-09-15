const express = require('express');
const EmployeeModel = require("../models/employee");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());



router.get("/", async(req, res)=> {
    try {
        const response = await EmployeeModel.find();
        res.json(response);
        //console.log(response.data);
    } catch (err) {
        res.json(err);
    }
});



router.get("/:id", async(req, res)=>{
    const employeeId = req.params.id;

    try {
        const employee = await EmployeeModel.findById(employeeId);
        if (!employee) {
            res.status(404).json({"error": "employee not found."});
        }
        else {
            res.send(employee);
        }
    }
    catch (e) {
        res.status(500).json({"error": "Something went wrong."});
    }
});



router.post("/", async(req, res) => {
    const employee = new EmployeeModel(req.body);

    try {
        const response = await employee.save();
        res.status(200);
        res.json(response);
    }
    catch (e) {
        res.status(400);
        res.json(e.message);
    }
});




router.put("/:id", async(req, res)=>{
    const employeeId = req.params.id;

    try {
        // const result = await EmployeeModel.updateOne(
        //     {_id: employeeId},
        //     {NIC: req.params.NIC, name: req.params.name, dob: req.params.dob, tel_no: req.params.tel_no, house: req.params.house},
        //     {new: true}
        // );
        const result = await EmployeeModel.replaceOne({_id: employeeId}, req.body);
        if (result) {
            res.send("Successfully Updated!");
        }
        else {
            res.send("Couldn't update");
        }
    }
    catch (e) {
        res.send(e.message);
    }
});





router.delete("/:id", async(req, res)=> {
    const employeeId = req.params.id;
    try{
        const result = await EmployeeModel.deleteOne({_id: employeeId});
        if(result) {
            res.send("Successfully deleted!");
        }
        else {
            res.send("AN error occured while deleting!");
        }
    }
    catch (e) {
        res.send(e.message);
    }
});




module.exports = router;