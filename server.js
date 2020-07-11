const express = require("express")
const mongoose = require("mongoose")

const app = express()


const MONGO_BLACK_URI = process.env.MONGOLAB_BLACK_URI || "mongodb://localhost/twilightApi";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

mongoose.connect(MONGO_BLACK_URI, options)

// mongoose.connect(MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology: true})


app.use(express.static(__dirname + '/dist/'));


app.use(express.json())
app.use(express.urlencoded({extended:true}));

require('./server/config/routes.js')(app);


const server = app.listen(process.env.PORT || 1337, () => {
    const port = server.address().port;
    console.log(`listening on port ${port}. Twilight App!`)
})