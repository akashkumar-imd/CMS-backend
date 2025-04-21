import express from "express";
import {createCampaignMode,getAllCampaignModes}  from "../controllers/campaign-mode.controller.js"; 
import {authenticateToken} from '../utils/common.js'

const campaignModeRouter = express.Router();

// Create department Route
campaignModeRouter.post("/create",authenticateToken, createCampaignMode);

// Find all department Route
campaignModeRouter.get('/get-all-campaign-mode',authenticateToken,getAllCampaignModes);

export { campaignModeRouter};
