const mongoose = require('mongoose')

const FactionSchema = new mongoose.Schema({
    faction: String,
    image: String,
    abilities: String,
    promissory_note: String,
    technologies: String,
    unit_upgrades: String,
    flagship: String,
    government: String,
    quote: String,
    lore: String,
})

module.exports = {
    Faction: mongoose.model('Faction', FactionSchema),

}