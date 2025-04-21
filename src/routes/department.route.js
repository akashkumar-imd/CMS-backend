import express from "express";
import {createDepartment,getAllDepartments}  from "../controllers/department.controller.js"; 
import {authenticateToken} from '../utils/common.js'

const departmentRouter = express.Router();

// Create department Route
departmentRouter.post("/create",authenticateToken, createDepartment);

// Find all department Route
departmentRouter.get('/get-all-department',authenticateToken,getAllDepartments);

export { departmentRouter};
