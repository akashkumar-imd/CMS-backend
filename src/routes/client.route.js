import express from "express";
import {createClient,getClientByCreatorId,getAllClients}  from "../controllers/client.controller.js"; 
import {authenticateToken} from '../utils/common.js'

const clientRouter = express.Router();

// Create Client Route
clientRouter.post("/create",authenticateToken, createClient);

// Find client based on creator Route
clientRouter.get('/get-client',authenticateToken,getClientByCreatorId);

// Find all client Route
clientRouter.get('/get-all-client',authenticateToken,getAllClients);

export { clientRouter};
