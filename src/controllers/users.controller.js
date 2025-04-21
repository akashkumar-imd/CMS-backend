import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { checkUserExist, userCreationInDB,findUserByEmail,updateUserStatus ,allUserById} from "../services/users.service.js";
import { checkSignUpValidation,checkLoginValidation } from "../utils/common.js";
import { messageLogs } from "../utils/message.js";
import { Constants } from "../utils/constants.js";

// createUser Controller
const createUser = async (req, res) => {
  const { email, password, username, mobile, status, role } = req.body;
  
  try {
    const errorValidation = checkSignUpValidation(
      email,
      username,
      password,
      mobile
    );

    if (errorValidation) {
      return res.status(errorValidation.status).json({ statusCode:errorValidation.status,message: errorValidation.message});
    }

    const user =  await checkUserExist(email, username);

    if (user.length !== 0) {
        return res.status(400).json({ statusCode:400,message: messageLogs.USER_EXIST});
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userCreationInDB(email, hashedPassword,username,mobile,status,role)
  
    res.status(201).json({
      message: messageLogs.SIGNUP_SUCCESS,
      userId: newUser.userId ? newUser.userId : "",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: err });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const errorValidation = checkLoginValidation(email, password);

    if (errorValidation) {
      return res.status(errorValidation.status).json({ statusCode:errorValidation.status,message: errorValidation.message});
    }

    const user = await findUserByEmail(email)
    
    if (!user) {
      return res.status(400).json({statusCode:400,message: messageLogs.USER_NOT_FOUND})
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({statusCode:400,message: messageLogs.VALID_PASSWORD})
    }

    const token = jwt.sign(
          {
            email: email,
            userId: user.userId,
            username: user.username,
            status: user.status,
            role: user.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: Constants.TOKEN_VALID_LIMIT }
        );
        return res.status(200).json({statusCode:200,userToken: token,userId:user.userId})
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: err });
  }
};

//User status controller
const changeStatus= async(req,res)=>{
  const {status,userId}=req.body
  try {
    const changedStatusData = await updateUserStatus(status,userId)

    if(changedStatusData){
      return res.status(200).json({
        statusCode:200,
        message: messageLogs.CHANGE_STATUS,
      });
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
  return res.status(500).json({ message: messageLogs.ERROR_MESSAGE });
}

const getAllUsers= async(req,res)=>{
  try {
    const allUsers = await allUserById()

    if(allUsers){
      return res.status(200).json({
        statusCode:200,
        message:"Here is your user list",
        data:allUsers
      });
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
  return res.status(500).json({ message: messageLogs.ERROR_MESSAGE });
}

export { 
  createUser,
  login,
  changeStatus,
  getAllUsers
};
