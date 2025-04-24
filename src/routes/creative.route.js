import express from "express";
import {createCreatives, createCreativeSizes,createCreativeType,getAllCreatives,getAllCreativeSize,getAllCreativeType}  from "../controllers/creative.controller.js"; 
import {authenticateToken} from '../utils/common.js'

const creativeRouter = express.Router();

// Create creative Route
creativeRouter.post("/create-creative-size",authenticateToken, createCreativeSizes);

// Find all creative Route
creativeRouter.get('/get-all-creative-size',authenticateToken,getAllCreativeSize);

// Create creative-type Route
creativeRouter.post("/create-creative-type",authenticateToken, createCreativeType);

// Find all creative-type Route
creativeRouter.get('/get-all-creative-type',authenticateToken,getAllCreativeType);

// Create creative Route
creativeRouter.post("/create-creative",authenticateToken, createCreatives);

// Find all creative-type Route
creativeRouter.get('/get-all-creative',authenticateToken,getAllCreatives);

export { creativeRouter};