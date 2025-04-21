import express from "express";
import { uploadImage,uploadVideo } from "../config/uploadBulk.js";
import { uploadImages,uploadVideos,playVideos } from "../controllers/upload.controller.js";

const uploadRouter = express.Router();

// File upload route
uploadRouter.post('/uploadImage', uploadImage.single('image'), uploadImages);

uploadRouter.post('/uploadVideo', uploadVideo.single('video'), uploadVideos);

uploadRouter.get('/play/:filename', playVideos);

export { uploadRouter};
