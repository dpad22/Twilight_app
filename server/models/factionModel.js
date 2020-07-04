const mongoose = require('mongoose')

const FactionSchema = new mongoose.Schema({
    _id: Number,
    faction: String,
    image: String,
    abilities: [{name:String,info:String}],
    promissory_note: {name:String,info:String},
    technologies: [{name:String,info:String}],
    unit_upgrades: [{name:String,cost:String,combat:Number,abilities:[String],move:Number,capacity:Number,prerequisites:String}],
    flagship: {name:String,cost:Number,combat:String,move:Number,capacity:Number,abilities:[String]},
    government: String,
    quote: String,
    lore: String,
})

module.exports = {
    Faction: mongoose.model('Faction', FactionSchema),

}