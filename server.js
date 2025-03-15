import express from 'express';
import adminRoutes from './routes/admin.js';
import userRoutes from './routes/user.js'
import mondodbconnect from './config/databaseConnect.js';
import cors from 'cors';            
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';  
import dotenv from 'dotenv';  

dotenv.config();
const app = express();

//Database Connection Establishment
mondodbconnect();

//app middleware
app.use(cors());
//app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.json());



//Routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);



const port = process.env.PORT;
app.listen(port, () => {
    console.log('listening on port ' + port)
})