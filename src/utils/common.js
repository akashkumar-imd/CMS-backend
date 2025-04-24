import { Constants } from "./constants.js";
import { messageLogs } from "./message.js";
import jwt from "jsonwebtoken";


const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  //when the token get expires it will give 
  if (!token) return res.status(401).json({ message: messageLogs.NO_ACCESS });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.userDetails = verified;
    next();
  } catch (error) {
    if (error.name === Constants.TOKEN_EXPIRE_ERROR) {
      return res.status(401).json({ 
        error: messageLogs.SESSION_EXPIRED, 
        message: messageLogs.TOKEN_EXPIRES 
      });
    }
  }
};

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validatePassword = (password) => password.length >= 6;
const validateName = (name) => name.trim().length > 0;
const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

const checkSignUpValidation = (email='', username='', password='', mobile='') => { 
  if (!validateEmail(email)) {
    return { status: 400,  message: messageLogs.EMAIL_REQUIRED };
  }

  if (!validateMobile(mobile)) {
    return { status: 400,  message: messageLogs.VALID_MOBILE };
  }

  if (!validateName(username)) {
    return { status: 400,  message: messageLogs.VALID_NAME };
  }

  if (!validatePassword(password)) {
    return { status: 400,  message: messageLogs.VALID_PASSWORD };
  }
  return false
};

const checkLoginValidation = (email='', password='') => {
  if (!validateEmail(email)) {
    return { status: 400,  message: messageLogs.EMAIL_REQUIRED };
  }

  if (!validatePassword(password)) {
    return { status: 400,  message: messageLogs.VALID_PASSWORD };
  }
  return false
};

const checkClientDetailsValidation = (email='', username='', mobile='',companyName='') => { 
  
  if (!validateEmail(email)) {
    return { status: 400,  message: messageLogs.EMAIL_REQUIRED };
  }

  if (!validateMobile(mobile)) {
    return { status: 400,  message: messageLogs.VALID_MOBILE };
  }

  if (!validateName(username)) {
    return { status: 400,  message: messageLogs.VALID_NAME };
  }

  if(!validateName(companyName)){
    return { status: 400,  message: messageLogs.VALID_COMPANY_NAME };
  }
  return false
};

const checkOrderPayloadValidation=(deptId,clientId,camapignName='',startDate='',endDate='',payoutCurrencyId,budget)=>{
  if (!Number(deptId)) {
    return { status: 400,  message: messageLogs.VALID_DEPT_ID };
  }

  if (!Number(clientId)) {
    return { status: 400,  message: messageLogs.VALID_CLIENT_ID };
  }

  if(!validateName(camapignName)){
    return { status: 400,  message: messageLogs.VALID_CAMPAIGN_NAME };
  }

  if(!validateName(startDate)){
    return { status: 400,  message: messageLogs.VALID_START_DATE };
  }
  
  if(!validateName(endDate)){
    return { status: 400,  message: messageLogs.VALID_END_DATE };
  }

  if (!Number(payoutCurrencyId)) {
    return { status: 400,  message: messageLogs.VALID_PAYOUT_CURRENCY_ID };
  }

  if (!Number(budget)) {
    return { status: 400,  message: messageLogs.VALID_BUDGET };
  }

  return false
}

const checkOrderDetailsPayloadValidation=(orderId,camapignName,campaignDesc,volume,payout,campaignType)=>{
  if (!Number(orderId)) {
    return { status: 400,  message: messageLogs.VALID_ORDER_ID };
  }

  if(!validateName(camapignName)){
    return { status: 400,  message: messageLogs.VALID_CAMPAIGN_NAME };
  }

  if(!validateName(campaignDesc)){
    return { status: 400,  message: messageLogs.VALID_CAMP_DESC };
  }

  if (!Number(volume)) {
    return { status: 400,  message: messageLogs.VALID_VOL };
  }

  if (!Number(payout)) {
    return { status: 400,  message: messageLogs.VALID_PAYOUT };
  }
  
  if(!validateName(campaignType)){
    return { status: 400,  message: messageLogs.VALID_CAMP_TYPE };
  }

  return false
}

const checkCreativeSizePayloadValidation=(creativeSize,campaignType)=>{

  if(!validateName(creativeSize)){
    return { status: 400,  message: messageLogs.CREATIVE_SIZE_REQ };
  }

  if(!validateName(campaignType)){
    return { status: 400,  message: messageLogs.VALID_CAMP_TYPE };
  }

  return false
}

const checkCreativeTypePayloadValidation=(creativeType,active)=>{

  if(!validateName(creativeType)){
    return { status: 400,  message: messageLogs.CREATIVE_TYPE_REQ };
  }

  if(!validateName(active)){
    return { status: 400,  message: messageLogs.REQ_ACTIVE };
  }

  return false
}

const gettingDepartmentName=(departments, id)=>{
  const department = departments.find(dept => dept.departmentId === id);
  return department ? department.departmentName : null;
}

const gettingClientName=(clients, id)=>{
  const client = clients.find(client => client.cId === id);
  return client ? client.name : null;
}

const checkCreativePayloadValidation=(orderId,creativeName,clickURL,trackingURL)=>{

  if (!Number(orderId)) {
    return { status: 400,  message: messageLogs.VALID_ORDER_ID };
  }

  if(!validateName(creativeName)){
    return { status: 400,  message: messageLogs.VALID_CREATIVE_NAME };
  }

  if(!validateName(clickURL)){
    return { status: 400,  message: messageLogs.VALID_CLICK_URL };
  }

  if(!validateName(trackingURL)){
    return { status: 400,  message: messageLogs.VALID_TRACKING_URL };
  }

  return false
}

export { 
  authenticateToken,
  checkSignUpValidation,
  checkLoginValidation,
  checkClientDetailsValidation,
  checkOrderPayloadValidation,
  checkOrderDetailsPayloadValidation,
  checkCreativeSizePayloadValidation,
  gettingDepartmentName,
  gettingClientName,
  checkCreativeTypePayloadValidation,
  checkCreativePayloadValidation
};
