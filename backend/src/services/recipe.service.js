const httpStatus = require('http-status');
const { Recipe } = require('../models');
const ApiError = require('../utils/ApiError');

const createRecipe = async (recipeBody) => { };

const getRecipeById = async (id) => { };
const updateRecipeById = async (id, updateBody) => { };
const deleteRecipeById = async (id) => { };

module.exports = {
    createRecipe,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById
}