const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const router = require("./routes/supplier-route");
const app = express();

app.use(express.json());
app.use("/suppliers",router);


mongoose
    .connect("mongodb+srv://jayanijayasinghe28:rUxHLcSHHlTJOSNJ@cluster0.odkpopo.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to database"))
    .then(() => {
        app.listen(8040);//8040
    })
    .catch((err) => console.log(err));