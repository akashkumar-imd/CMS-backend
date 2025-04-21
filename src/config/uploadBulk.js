import multer from "multer";
import fs from "fs";
import path from "path";

// Helper to ensure directory exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Image upload config
const imageUploadPath = 'uploads/image';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureDir(imageUploadPath);
    cb(null, imageUploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const uploadImage = multer({ storage });

// Video upload config
const videoUploadPath = 'uploads/videos';
const videoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureDir(videoUploadPath);
    cb(null, videoUploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    console.log("Uploading video: ", file.originalname);
    cb(null, uniqueName);
  },
});
const uploadVideo = multer({ storage: videoStorage });

export { uploadImage, uploadVideo };
