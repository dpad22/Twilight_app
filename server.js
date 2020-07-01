const express = require("express")
const mongoose = require("mongoose")

const app = express()
mongoose.connect("mongodb://localhost/twilightApi", {userNewUrlParser:true})

// settings


app.use(express.static(__dirname + '/twilightFun/dist/twilightFun'))

app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app);


app.listen(1337, () => console.log("listening on port 1337. ProductApp!"));