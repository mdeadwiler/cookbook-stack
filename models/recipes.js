// controllers/recipes.js
const mongoose = require('mongoose')


const recipesSchema = new mongoose.Schems({
    name: {type: String, require: true},
    instructions: {type: String},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    ingrediets: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients'}
});

const Recipes = mongoose.model('Recipes', recipesSchema)

module.exports = Recipes;



