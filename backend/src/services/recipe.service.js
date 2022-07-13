const httpStatus = require('http-status');
const { Recipe } = require('../models');
const ApiError = require('../utils/ApiError');

const getAllRecipes = async (recipeBody) => {
    console.log("Getting all recipes");
    const recipes = await Recipe.paginate(filter, options);
    return recipes;
}

const createRecipe = async (recipeBody) => {
    console.log(`create Recipe`);
    console.log(recipeBody);
};

const getRecipeById = async (id) => { };

const updateRecipeById = async (id, updateBody) => { };

const deleteRecipeById = async (id) => { };

module.exports = {
    createRecipe,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById
}