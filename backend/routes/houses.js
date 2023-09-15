const express = require('express');
const HouseModel = require('../models/house');
// const bodyParser = require("body-parser");

const router = express.Router();

// router.use(bodyParser.json());
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get("/", async(req, res)=>{
    try {
        const response = await HouseModel.find();
        res.json(response);
        //console.log(response.data);
    } catch (err) {
        res.json(err);
    }
});




router.get("/:id", async(req, res)=>{
    const houseId = req.params.id;

    try {
        const house = await HouseModel.findById(houseId);
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




router.post("/", async(req, res)=> {
    // const house = new HouseModel({
    //     address: req.body.address,
    //     n_rooms: req.body.n_rooms,
    //     n_bathrooms: req.body.n_bathrooms,
    //     rent: req.body.rent
    // });

    const house = new HouseModel(req.body);

    console.log(house);

    try {
        const response = await house.save();
        res.status(200);
        res.json(response);
    }
    catch (e) {
        res.status(400);
        res.json(e.message);
    }
});




router.put("/:id", async(req, res)=>{
    const houseId = req.params.id;

    try {
        // const result = await HouseModel.updateOne(
        //     {_id: houseId},
        //     {address: req.body.address, n_rooms: req.body.n_rooms, n_bathrooms: req.body.n_bathrooms, rent: req.body.rent, tenat: req.body.tenat},
        //     {new: true}
        // );
        const result = await HouseModel.replaceOne({_id: houseId}, req.body);
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
    const houseId = req.params.id;
    try{
        const result = await HouseModel.deleteOne({_id: houseId});
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