const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

const houseRouter = require("./routes/houses");
const tenantRouter = require("./routes/tenants");
const complaintRouter = require("./routes/complaints");
const employeeRouter = require("./routes/employees");
// const adminAuthRouter = require("./routes/adminAuth");
// const authRouter = require("./routes/auth");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use("/house", houseRouter);
app.use("/tenant", tenantRouter);
app.use("/complaint", complaintRouter);
app.use("/employee", employeeRouter);
// app.use("/adminAuth", adminAuthRouter);
// app.use("/auth", authRouter);


const PORT = 3000;
const CONNECTION = 'mongodb+srv://RAD_Group:drpyRgvXc1gagxil@rad.etqntue.mongodb.net/Houses?retryWrites=true&w=majority';



const start = async() => {
    try{
        await mongoose.connect(CONNECTION);
        console.log("DB connected");
    }
    catch (e) {
        console.log(e.message);
    }

    app.listen(PORT, ()=>{
        console.log('App listening on port ' + PORT);
    });
}

start();