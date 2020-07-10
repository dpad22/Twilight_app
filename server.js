const express = require("express")
const path = require('path');
const mongoose = require("mongoose")

const app = express()
// mongoose.connect("mongodb://localhost/twilightApi", {userNewUrlParser:true})

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/twilightApi";

const options = {
    userNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

mongoose.connect(MONGODB_URI, options)
// settings


app.use(express.static(__dirname + '/twilight-fun/dist/twilight-fun'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+ '/dist/index.html'));
});

db = client.db()
console.log("Database connection ready");

// app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app);


app.listen(process.env.PORT || 1337, () => console.log("listening on port 1337. Twilight App!"));