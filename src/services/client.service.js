import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getClientsByUserId = async(userId)=>{
  try {
    const allClients= await prisma.client.findMany({
      where:{userId:userId}
    })
    
    return allClients;

  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

const getAllClient = async()=>{
  try {
    const allClients= await prisma.client.findMany()
    
    return allClients;

  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

const createNewClient = async(name,email,mobile,companyName,userId)=>{
  try {
    const newClient= await prisma.client.create({
      data:{
        name:name,
        email:email,
        mobile:mobile,
        companyName:companyName,
        userId:userId,
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
  getClientsByUserId,
  createNewClient,
  getAllClient
}
