import multer = require("multer");
import * as path from 'path';
import {Request, Response} from "express";

const uploadFilePath = path.resolve(__dirname, "../../", "public");

const storageFile : multer.StorageEngine = multer.diskStorage({
  destination: uploadFilePath,
  filename:(req: Request, file: Express.Multer.File, fn:(error: Error | null, filename: string)=> void):void=> {
    fn(null, `${new Date().getTime().toString()}-${file.fieldname}${path.extname(file.originalname)}`)
  },
});

const uploadFile = multer({
  storage: storageFile,
  limits: {fileSize: 5 * 1024 * 1024},
  fileFilter(req, file, callback) {
    const extension: boolean = ['.png', '.jpg', '.jpeg'].indexOf(path.extname(file.originalname).toLowerCase()) >= 0;
    const mimeType: boolean = ['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.mimetype) >= 0;
    
    if (extension && mimeType) {
      return callback(null, true);
    }
    
    callback(new Error('Invalid file type. Only picture file on type PNG and JPG are allowed!'));
  },
}).single('image');

const handleSingleUploadFile = async (req: Request, res: Response): Promise<any> => {
  return new Promise((resolve, reject): void => {
    uploadFile(req, res, (error) => {
      if (error) {
        reject(error);
      }
      
      resolve({ file: req.file, body: req.body });
    });
  });
};
export type UploadedFile = {
  fieldname: string; // file
  originalname: string; // myPicture.png
  encoding: string; // 7bit
  mimetype: string; // image/png
  destination: string; // ./public/uploads
  filename: string; // 1571575008566-myPicture.png
  path: string; // public/uploads/1571575008566-myPicture.png
  size: number; // 1255
};

export { handleSingleUploadFile };




