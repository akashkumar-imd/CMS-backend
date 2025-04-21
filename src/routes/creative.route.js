import express from "express";
import {createCreativeSize,createCreativeType,getAllCreativeSize,getAllCreativeType}  from "../controllers/creative.controller.js"; 
import {authenticateToken} from '../utils/common.js'

const creativeRouter = express.Router();

// Create creative Route
creativeRouter.post("/create/creative-size",authenticateToken, createCreativeSize);

// Find all creative Route
creativeRouter.get('/get-all-creative',authenticateToken,getAllCreativeSize);

// Create creative-type Route
creativeRouter.post("/create/creative-type",authenticateToken, createCreativeType);

// Find all creative-type Route
creativeRouter.get('/get-all-creative-type',authenticateToken,getAllCreativeType);

export { creativeRouter};