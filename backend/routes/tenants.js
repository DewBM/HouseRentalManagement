const express = require('express');
const TenantModel = require('../models/tenant');
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());



router.get("/", async(req, res)=> {
    try {
        const response = await TenantModel.find();
        res.json(response);
        //console.log(response.data);
    } catch (err) {
        res.json(err);
    }
});




router.get("/:id", async(req, res)=>{
    const tenantId = req.params.id;

    try {
        const house = await TenantModel.findById(tenantId);
        if (!house) {
            res.status(404).json({"error": "House not found."});
        }
        else {
            res.send(house);
        }
    }
    catch (e) {
        res.status(500).json({"error": "Something went wrong."});
    }
});





router.post("/", async(req, res) => {
    const tenant = new TenantModel(req.body);

    console.log(tenant);

    try {
        const response = await tenant.save();
        res.status(200);
        res.json(response);
    }
    catch (e) {
        res.status(400);
        res.json(e.message);
    }
});




router.put("/:id", async(req, res)=>{
    const tenantId = req.params.id;

    try {
        // const result = await TenantModel.updateOne(
        //     {_id: tenantId},
        //     {NIC: req.params.NIC, name: req.params.name, dob: req.params.dob, tel_no: req.params.tel_no, house: req.params.house},
        //     {new: true}
        // );
        const result = await TenantModel.replaceOne({_id: tenantId}, req.body);
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
    const tenantId = req.params.id;
    try{
        const result = await TenantModel.deleteOne({_id: tenantId});
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