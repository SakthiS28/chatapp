import express from 'express';
const router = express.Router();
import UserController from '../controllers/UserController.js';
import { authenticate } from '../config/tokenAuthenticate.js';
import multer from 'multer';
import { productFileUpload } from '../config/multerStorage.js';





//const upload = multer({ storage: productFileUpload() });








router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/userlist', UserController.userlist);

router.post('/chat', UserController.chat);





export default router;
