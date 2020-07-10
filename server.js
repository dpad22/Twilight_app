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
    
};

mongoose.connect(MONGODB_URI, options)
// settings


app.use(express.static(__dirname + '/twilight-fun/dist/twilight-fun'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+ '/dist//twilight-fun/index.html'));
});


// app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app);


app.listen(process.env.PORT || 1337, () => console.log("listening on port 1337. Twilight App!"));