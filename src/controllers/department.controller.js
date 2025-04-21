import { createNewDepartment,getAllDepartment } from "../services/department.service.js";
import { messageLogs } from "../utils/message.js";

// Department Creation controller
const createDepartment=async(req,res)=>{
  const {departmentName} = req.body
  try {
    if (!departmentName || departmentName=='') {
      return res.status(400).json({
        statusCode:400,
        message:messageLogs.DEPT_REQ,
      })
    }

    const newDepartment= await createNewDepartment(departmentName)
    
    return res.status(201).json({
      statusCode:201,
      message:messageLogs.CREATE_DEPT,
      departmentId:newDepartment.departmentId
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}

//get all departments details
const getAllDepartments=async(req,res)=>{
  try {
    const department= await getAllDepartment()
    
    return res.status(200).json({statusCode:200,message:messageLogs.ALL_DEPTS,result:department})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}



export { 
  createDepartment,
  getAllDepartments
};
