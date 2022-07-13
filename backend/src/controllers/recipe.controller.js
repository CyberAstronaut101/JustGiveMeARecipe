const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { recipeService } = require('../services');

const createRecipe = catchAsync(async (req, res) => {
    console.log(req);
    const recipe = await recipeService.createRecipe(req.body);
    res.status(httpStatus.CREATED).send(recipe);
});

const getRecipes = catchAsync(async (req, res) => {
    console.info('GetRecipes Not implemented')
    res.status(httpStatus.NOT_IMPLEMENTED).send();
});

const getRecipe = catchAsync(async (req, res) => {
    res.status(httpStatus.NOT_IMPLEMENTED).send();
});
const updateRecipe = catchAsync(async (req, res) => {
    res.status(httpStatus.NOT_IMPLEMENTED).send();
});
const deleteRecipe = catchAsync(async (req, res) => {
    res.status(httpStatus.NOT_IMPLEMENTED).send();
});

module.exports = {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe,
}