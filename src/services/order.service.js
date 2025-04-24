import { PrismaClient } from "@prisma/client";
import { messageLogs } from "../utils/message.js";

const prisma = new PrismaClient();

const createOrder = async (deptId,clientId,campaignName,startDate,endDate,payoutCurrency,budget,campaignType,userId) => {
  try {
    const orderData = await prisma.order.create({
      data:{
        departmentId:deptId,
        clientId:clientId,
        campaignName :campaignName,
        startDate:startDate,
        endDate :endDate,
        payoutCurrency :payoutCurrency,
        budget :budget,
        campaignType:campaignType,
        userId:userId
      }
    })

    return orderData;
    
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: { message: messageLogs.ERROR_MESSAGE, error: error },
    };
  } finally {
    await prisma.$disconnect();
  }
};

const getAllOrderFromDB = async () => {
  try {
    const orderData = await prisma.order.findMany()

    return orderData
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: { message: messageLogs.ERROR_MESSAGE, error: error },
    };
  } finally {
    await prisma.$disconnect();
  }
};

const createOrderLogs = async (orderId,deptId,clientId,campaignName,startDate,endDate,payoutCurrency,budget,campaignType,userId) => {
  try {
    const orderLogsData = await prisma.order_logs.create({
      data:{
        orderId:orderId,
        departmentId:deptId,
        clientId:clientId,
        campaignName :campaignName,
        startDate:startDate,
        endDate :endDate,
        payoutCurrency :payoutCurrency,
        budget :budget,
        campaignType:campaignType,
        userId:userId
      }
    })

    return orderLogsData;
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: { message: messageLogs.ERROR_MESSAGE, error: error },
    };
  } finally {
    await prisma.$disconnect();
  }
};

const updateOrderByOrderId = async (where,dataToUpdate) => {
  try {
    const data = await prisma.order.update({
      where: where,
      data: dataToUpdate,
    });
    
    return data;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

const createOrderDetail = async (orderId,campaignName,campaignDesc,volume,payout,campaignType) => {
  try {
    const orderDetailsData = await prisma.order_details.create({
      data:{
        orderId:orderId,
        campaignName:campaignName,
        campaignDesc:campaignDesc,
        volume:volume,
        payout:payout,
        budget:Number(volume)*Number(payout),
        campaignType:campaignType
      }
    })

    return orderDetailsData
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: { message: messageLogs.ERROR_MESSAGE, error: error },
    };
  } finally {
    await prisma.$disconnect();
  }
};

const createOrderDetailLogs = async (orderId,campaignName,campaignDesc,volume,payout,orderDetailsId) => {
  try {
    const orderDetaillogsData = await prisma.order_details_logs.create({
      data:{
        orderId:orderId,
        orderDetailsId:orderDetailsId,
        campaignName:campaignName,
        campaignDesc:campaignDesc,
        volume:volume,
        payout:payout,
        budget:Number(volume)*Number(payout),
      }
    })

    return orderDetaillogsData
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: { message: messageLogs.ERROR_MESSAGE, error: error },
    };
  } finally {
    await prisma.$disconnect();
  }
};

const getAllOrderDetailsFromDB = async (orderId) => {
  try {
    const orderDetailsData = await prisma.order_details.findMany({
      where:{
        orderId:Number(orderId)
      }
    })

    return orderDetailsData
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: { message: messageLogs.ERROR_MESSAGE, error: error },
    };
  } finally {
    await prisma.$disconnect();
  }
};

const updateOrderDetailsByODId = async (where,dataToUpdate) => {
  try {
    const data = await prisma.order_details.update({
      where: where,
      data: dataToUpdate,
    });
    
    return data;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export { 
  createOrder,
  getAllOrderFromDB,
  createOrderLogs,
  createOrderDetail,
  createOrderDetailLogs,
  getAllOrderDetailsFromDB,
  updateOrderDetailsByODId,
  updateOrderByOrderId
}
