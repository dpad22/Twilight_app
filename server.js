const express = require("express")
const path = require('path');
const mongoose = require("mongoose")

const app = express()
mongoose.connect("mongodb://localhost/twilightApi", {userNewUrlParser:true})

// settings


app.use(express.static(__dirname + '/twilightFun/dist/twilightFun'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/twilightFun/dist/twilightFun/index.html'));
});

app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app);


app.listen(process.env.PORT || 1337, () => console.log("listening on port 1337. Twilight App!"));