import { getAllClient } from "../services/client.service.js";
import { getAllDepartment } from "../services/department.service.js";
import {
  createOrder,
  getAllOrderFromDB,
  createOrderLogs,
  createOrderDetail,
  createOrderDetailLogs,
  getAllOrderDetailsFromDB,
} from "../services/order.service.js";
import { gettingClientName, gettingDepartmentName } from "../utils/common.js";
import { messageLogs } from "../utils/message.js";

//Create order controller
const createOrders = async (req, res) => {
  const {
    departmentId,
    clientId,
    campaignName,
    startDate,
    endDate,
    payoutCurrency,
    budget,
    campaignType,
  } = req.body;
  const { userId } = req.userDetails;
  try {
    //checks for req.body

    // create records in order table
    const createdOrderData = await createOrder(
      departmentId,
      clientId,
      campaignName,
      startDate,
      endDate,
      payoutCurrency,
      budget,
      campaignType,
      userId
    );

    const orderId = createdOrderData.orderId;

    // logs created in order logs table
    await createOrderLogs(
      orderId,
      departmentId,
      clientId,
      campaignName,
      startDate,
      endDate,
      payoutCurrency,
      budget,
      campaignType,
      userId
    );

    res.status(201).json({
      statusCode: 201,
      message: "Order Created Succcessfully..!",
      orderId: orderId,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

//Get all order controller
const getAllOrder = async (req, res) => {
  try {
    //fetching all the data from backend

    const [orders, departmentDetails, clientDetails] = await Promise.all([
      getAllOrderFromDB(),
      getAllDepartment(),
      getAllClient(),
    ]);

    const deptMap = new Map(
      departmentDetails.map((d) => [d.departmentId, d.departmentName])
    );
    const clientMap = new Map(
      clientDetails.map((c) => [c.cId, c.companyName])
    );

    const allOrdersDetails = orders.map((orderItem) => ({
      orderId: orderItem.orderId,
      userId: orderItem.userId,
      departmentName: deptMap.get(orderItem.departmentId) || "Department Name",
      client: clientMap.get(Number(orderItem.clientId)) || "Client Name",
      campaignName: orderItem.campaignName,
      campaignType: orderItem.campaignType,
      payoutCurrency: orderItem.payoutCurrency,
      budget: orderItem.budget,
      startDate: orderItem.startDate,
      endDate: orderItem.endDate,
    }
    
  ));

    return res.status(200).json({
      statusCode: 200,
      data: allOrdersDetails,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

//Update order controller
const updateOrder = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

//Create order details controller
const createOrderDetails = async (req, res) => {
  const { orderId, campaignName, campaignDesc, volume, payout, campaignType } =
    req.body;
  try {
    //checks for req.body

    //create orderDetails
    const orderDetailData = await createOrderDetail(
      orderId,
      campaignName,
      campaignDesc,
      volume,
      payout,
      campaignType
    );
    const orderDetailsId = orderDetailData.id;

    //logs created in order details logs
    await createOrderDetailLogs(
      orderId,
      campaignName,
      campaignDesc,
      volume,
      payout,
      campaignType,
      orderDetailsId
    );
    return res.status(201).json({
      statusCode: 201,
      message: "Order Details created successfully..!",
      orderDetailsId: orderDetailsId,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

//Get all order details controller
const getAllOrderDetails = async (req, res) => {
  try {
    //fetching all the data from backend
    const orderDetails = await getAllOrderDetailsFromDB();

    return res.status(200).json({
      statusCode: 200,
      data: orderDetails,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

//Update order details controller
const updateOrderDetails = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
};

export {
  createOrders,
  getAllOrder,
  updateOrder,
  createOrderDetails,
  getAllOrderDetails,
  updateOrderDetails,
};
