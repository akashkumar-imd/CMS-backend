import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllPayoutCurrency= async()=>{
  try {
    const allpayOutCurrency= await prisma.payout_currency.findMany()
    
    return allpayOutCurrency;

  } catch (error) {
    console.log(error);
    return false;
  }finally {
    await prisma.$disconnect();
  }
}

export { 
  getAllPayoutCurrency
}
