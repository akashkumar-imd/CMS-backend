import express from "express";
import {createUser,login,changeStatus,getAllUsers}  from "../controllers/users.controller.js"; 
import {authenticateToken} from '../utils/common.js'

const userRouter = express.Router();

// Create User Route
userRouter.post("/signup", createUser);

// Login Route
userRouter.post("/login", login);

// User change status
userRouter.post('/change-status',authenticateToken,changeStatus)

//get all users
userRouter.get('/get-all-user',authenticateToken,getAllUsers)

export { userRouter};
