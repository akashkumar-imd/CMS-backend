import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllDepartment = async()=>{
  try {
    const allDepartment= await prisma.department.findMany()
    
    return allDepartment;

  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

const createNewDepartment = async(departmentName)=>{
  try {
    const newClient= await prisma.department.create({
      data:{
        departmentName:departmentName
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
  createNewDepartment,
  getAllDepartment
}
