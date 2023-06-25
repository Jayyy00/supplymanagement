const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//const bodyParser = require('body-parser');//new

const app = express();
app.use(cors())
//inport routes
//const postRoutes = require('./routes/supdetails-routes');//new

//meddlewares
//app.use(bodyParser.json());//new

//app.use(postRoutes);//new
app.use(express.json());


mongoose
    .connect("mongodb+srv://jayanijayasinghe28:rUxHLcSHHlTJOSNJ@cluster0.odkpopo.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to database"))
    .then(() => {
        app.listen(8040);
    })
    .catch((err) => console.log(err));