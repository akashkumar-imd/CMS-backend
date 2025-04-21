import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCampaignMode = async()=>{
  try {
    const allCampaignMode= await prisma.campaign_mode.findMany()
    
    return allCampaignMode;

  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

const createNewCampaignMode = async(campaignModeName)=>{
  try {
    const newClient= await prisma.campaign_mode.create({
      data:{
        modeName:campaignModeName
      }
    })

    return newClient;
  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

export { 
  createNewCampaignMode,
  getAllCampaignMode
}
