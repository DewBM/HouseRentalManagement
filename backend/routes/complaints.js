const express = require('express');
const ComplaintModel = require("../models/complaint");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());



router.get("/", async(req, res)=> {
    try {
        const response = await ComplaintModel.find();
        res.json(response);
        //console.log(response.data);
    } catch (err) {
        res.json(err);
    }
});




router.get("/:id", async(req, res)=>{
    const complaintId = req.params.id;

    try {
        const complaint = await ComplaintModel.findById(complaintId);
        if (!complaint) {
            res.status(404).json({"error": "Complaint not found."});
        }
        else {
            res.send(complaint);
        }
    }
    catch (e) {
        res.status(500).json({"error": "Something went wrong."});
    }
});




router.post("/", async(req, res) => {
    const complaint = new ComplaintModel(req.body);

    try {
        const response = await complaint.save();
        res.status(200);
        res.json(response);
    }
    catch (e) {
        res.status(400);
        res.json(e.message);
    }
});




router.put("/:id", async(req, res)=>{
    const complaintId = req.params.id;

    try {
        // const result = await ComplaintModel.updateOne(
        //     {_id: complaintId},
        //     {NIC: req.params.NIC, name: req.params.name, dob: req.params.dob, tel_no: req.params.tel_no, house: req.params.house},
        //     {new: true}
        // );
        const result = await ComplaintModel.replaceOne({_id: complaintId}, req.body);
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
    const complaintId = req.params.id;
    try{
        const result = await ComplaintModel.deleteOne({_id: complaintId});
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