import { createNewClient, getClientsByUserId,getAllClient } from "../services/client.service.js";
import { checkClientDetailsValidation } from "../utils/common.js";
import { messageLogs } from "../utils/message.js";

// Client Creation controller
const createClient=async(req,res)=>{
  const {userId}= req.userDetails;
  const {name,email,mobile,companyName} = req.body
  try {
    
    if (!Number(userId)) {
      return res.status(400).json({
        statusCode:400,
        message:messageLogs.TOKEN_EXPIRES,
      })
    }

    const verified = checkClientDetailsValidation(email,name,mobile,companyName)
    if (verified){
      return res.status(verified.status).json({
        statusCode:verified.status,
        message:verified.message,
      })
    }

    const newClient= await createNewClient(name,email,mobile,companyName,userId)

    return res.status(201).json({
      statusCode:201,
      message:messageLogs.CREATE_CLIENT,
      clientId:newClient.cId
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}

// get all client acc to userId controller
const getClientByCreatorId=async(req,res)=>{
  const {userId} =req.userDetails
  try {
    const clients= await getClientsByUserId(userId)
    
    return res.status(200).json({statusCode:200,message:messageLogs.ALL_CLIENTS,result:clients})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}

const getAllClients=async(req,res)=>{
  try {
    const clients= await getAllClient()
    
    return res.status(200).json({statusCode:200,message:messageLogs.ALL_CLIENTS,result:clients})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}



export { 
  createClient,
  getAllClients,
  getClientByCreatorId,
};
