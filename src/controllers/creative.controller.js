import { getAllCreativeSizes,createCreative } from "../services/creativeSize.service.js";
import { messageLogs } from "../utils/message.js";
import { checkCreativeSizePayloadValidation,checkCreativeTypePayloadValidation } from "../utils/common.js";
import { createNewCreativeType,getCreativeType } from "../services/creativeType.service.js";

// CreativeSizes Creation controller
const createCreativeSize=async(req,res)=>{
  const {creativeSize,campaignType} = req.body

  try {
    const errorValidation = checkCreativeSizePayloadValidation(creativeSize,campaignType)

    if (errorValidation) {
      return res.status(errorValidation.status).json({ statusCode:errorValidation.status,message: errorValidation.message});
    }

    const newCreativeSize= await createCreative(creativeSize,campaignType)
    

    return res.status(201).json({
      statusCode:201,
      message:messageLogs.CREATE_CREATIVE_SIZE,
      departmentId:newCreativeSize.creativeSizeId
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}

//get all creative size details
const getAllCreativeSize=async(req,res)=>{
  try {
    const creativeSize= await getAllCreativeSizes()
    
    return res.status(200).json({statusCode:200,message:messageLogs.ALL_CREATIVE_SIZES,result:creativeSize})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}


// CreativeType Creation controller
const createCreativeType=async(req,res)=>{
  const {creativeType,active} = req.body
  console.log(creativeType,active);
  
  try {
    const errorValidation = checkCreativeTypePayloadValidation(creativeType,active)
    if (errorValidation) {
      return res.status(errorValidation.status).json({ statusCode:errorValidation.status,message: errorValidation.message});
    }

    let updatedActiveValue
    if(active=="ACTIVE"){
      updatedActiveValue=true
    }else{
      updatedActiveValue=false
    }
    const newCreativeSize= await createNewCreativeType(creativeType,updatedActiveValue)
    
    return res.status(201).json({
      statusCode:201,
      message:messageLogs.CREATE_CREATIVE_TYPE,
      departmentId:newCreativeSize.id
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}

//get all creative type details
const getAllCreativeType=async(req,res)=>{
  try {
    const creativeType= await getCreativeType()
    
    return res.status(200).json({statusCode:200,message:messageLogs.ALL_CREATIVE_SIZES,result:creativeType})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}


export { 
  createCreativeSize,
  getAllCreativeSize,
  createCreativeType,
  getAllCreativeType
};
