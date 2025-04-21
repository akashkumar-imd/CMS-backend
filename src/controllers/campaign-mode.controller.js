import { createNewCampaignMode,getAllCampaignMode } from "../services/campaignMode.service.js";
import { messageLogs } from "../utils/message.js";

// Campaign mode Creation controller
const createCampaignMode=async(req,res)=>{
  const {campaignMode} = req.body
  try {
    if (!campaignMode || campaignMode=='') {
      return res.status(400).json({
        statusCode:400,
        message:messageLogs.CAMP_MODE_REQ,
      })
    }

    const newCampaignMode= await createNewCampaignMode(campaignMode)
    
    return res.status(201).json({
      statusCode:201,
      message:messageLogs.CREATE_DEPT,
      departmentId:newCampaignMode.modeId
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}

//get all departments details
const getAllCampaignModes=async(req,res)=>{
  try {
    const campaignModes= await getAllCampaignMode()
    
    return res.status(200).json({statusCode:200,message:messageLogs.ALL_CAMP_MODE,result:campaignModes})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}



export { 
  createCampaignMode,
  getAllCampaignModes
};
