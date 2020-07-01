const faction = require('../controllers/factions.js')
var path = require("path");



module.exports = function(app){

    app.get("/display", faction.index);

    app.get("/display/:id", faction.findFaction);

}