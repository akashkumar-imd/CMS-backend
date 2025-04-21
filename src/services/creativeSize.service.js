import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCreativeSizes = async()=>{
  try {
    const allCreativeSizes= await prisma.creative_size.findMany()
    
    return allCreativeSizes;

  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

const createCreative = async(creativeSize,campaignType)=>{
  try {
    const newCreativeSize= await prisma.creative_size.create({
      data:{
        creativeSize:creativeSize,
        campaignType:campaignType
      }
    })

    return newCreativeSize;
  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

export { 
  createCreative,
  getAllCreativeSizes
}
