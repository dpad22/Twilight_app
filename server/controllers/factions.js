const { Faction } = require('../models/factionModel.js')

// bycrypt const goes here


module.exports = {
    // index route
    index: (req, res) => {
        Faction.find()
            .then(data => {
                console.log("index route")
                console.log(data)
                res.json(data);
            })
            .catch(err => {
                res.json(err)
            })
    },

    findFaction: (req, res) => {
        Faction.findOne({ _id: req.params.id })
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    }

}