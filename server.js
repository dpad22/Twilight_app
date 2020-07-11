const express = require("express")
const mongoose = require("mongoose")

const app = express()


const uristring = process.env.MONGODB_URI || process.env.MONGOLAB_URI || "mongodb://localhost/twilightApi"

mongoose.connect(uristring, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + uristring);
    }
});

// mongoose.connect(MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology: true})


app.use(express.static(__dirname + '/dist/'));


app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app);


const server = app.listen(process.env.PORT || 1337, () => {
    const port = server.address().port;
    console.log(`listening on port ${port}. Twilight App!`)
})