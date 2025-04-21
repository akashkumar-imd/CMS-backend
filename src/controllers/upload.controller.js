import { messageLogs } from "../utils/message.js";
// upload files to uploads/images
const uploadImages=(req,res)=>{
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    res.json({ filePath: `uploads/image/${req.file.filename}` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}

// upload files to uploads/videos
const uploadVideos=(req,res)=>{
  try {
    if (!req.file) return res.status(400).send({ error: 'No file uploaded' });
    res.send({ filePath: `play/${req.file.filename}` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}

// help in access videos
const playVideos=(req,res)=>{
  try {
    const videoUrl = `/uploads/videos/${req.params.filename}`;
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Video Player</title>
      <style>
        video { max-width: 80%;}
      </style>
    </head>
    <body>
      <video controls autoplay>
        <source src="${videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </body>
    </html>
  `);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: messageLogs.ERROR_MESSAGE, error: error });
  }
}



export { 
  uploadImages,
  uploadVideos,
  playVideos
};
