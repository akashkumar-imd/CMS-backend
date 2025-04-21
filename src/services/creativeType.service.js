import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCreativeType = async()=>{
  try {
    const allCreativeType= await prisma.creative_type.findMany()
    
    return allCreativeType;

  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

const  createNewCreativeType= async(creativeType,active)=>{
  try {
    const newCreativeType= await prisma.creative_type.create({
      data:{
        name:creativeType,
        active:active
      }
    })

    return newCreativeType;
  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

export { 
  createNewCreativeType,
  getCreativeType
}
