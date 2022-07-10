const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const recipeSchema = mongoose.Schema(
    {
        title: { type: String, required: true }
    }
)

recipeSChema.plugin(toJSON);

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe;