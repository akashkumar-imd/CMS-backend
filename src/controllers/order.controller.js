import { getAllClient } from "../services/client.service.js";
import { getAllDepartment } from "../services/department.service.js";
import { getAllPayoutCurrency } from "../services/payoutCurrency.service.js";
import {
  createOrder,
  getAllOrderFromDB,
  createOrderLogs,
  createOrderDetail,
  createOrderDetailLogs,
  getAllOrderDetailsFromDB,
} from "../services/order.service.js";
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
    const orderLogs = await createOrderLogs(
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
      orderLogsId: orderLogs.id
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

    const [orders, departmentDetails, clientDetails,payoutCurrencyDetails] = await Promise.all([
      getAllOrderFromDB(),
      getAllDepartment(),
      getAllClient(),
      getAllPayoutCurrency()
    ]);

    const deptMap = new Map(
      departmentDetails.map((d) => [d.departmentId, d.departmentName])
    );
    const clientMap = new Map(
      clientDetails.map((c) => [c.cId, c.companyName])
    );
    const currencyMap = new Map(
      payoutCurrencyDetails.map((p) => [p.currencyId, `${p.currencyName} (${p.currencySymbol})`])
    );

    const allOrdersDetails = orders.map((orderItem) => ({
      orderId: orderItem.orderId,
      userId: orderItem.userId,
      departmentName: deptMap.get(orderItem.departmentId) || "Department Name",
      client: clientMap.get(Number(orderItem.clientId)) || "Client Name",
      campaignName: orderItem.campaignName,
      campaignType: orderItem.campaignType,
      payoutCurrency: currencyMap.get(Number(orderItem.payoutCurrency)) || "Currency",
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
    );
    const orderDetailsId = orderDetailData.id;
    console.log(orderDetailsId);
    

    //logs created in order details logs
    await createOrderDetailLogs(
      orderId,
      campaignName,
      campaignDesc,
      volume,
      payout,
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
  const { orderId } = req.query;
  try {
    //fetching all the data from backend
    const orderDetails = await getAllOrderDetailsFromDB(orderId);

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
