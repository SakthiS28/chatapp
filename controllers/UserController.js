import UserModel from "../models/UserModel.js";
import jwtToken from "jsonwebtoken";
import crypto from "node:crypto";
import ProductModel from "../models/ProductModel.js";
import data from "../models/data.js";
import express from 'express';
import { text } from "node:stream/consumers";
import { request } from "node:http";



const router = express.Router();
class UserController {

    async registerUser(request, response) {
        try {
            let requestData = request.body;
            let returnData = { status: false, message: 'An Error Occured' };
            if ((requestData.userName && requestData.userName.trim() != '') && (requestData.password && requestData.password.trim() != '')) {

                if (requestData.password.length >= 8) {
                   
                    let userDatas = {
                        userName: requestData.userName,
                        password: requestData.password,
                        mobileNo: requestData.mobileNo,
                        emailId: requestData.emailId,
                        role: requestData.role,
                    }

                    await UserModel.insert(userDatas);
                    returnData = { status: true, message: 'Registered' };
                } else {
                    returnData = { status: false, message: 'password must be min 8 char' };
                }

            } else {
                returnData = { status: false, message: 'in valid request' };
            }


            response.send(returnData);
        } catch (error) {
            response.send({ status: false, message: 'An Error Occured', error });
        }
    }
    
                                                                                                                                    
    async getUserList1(request, response, next) {
        try {
            let getData = await UserModel.model.find();
            response.send({ status: true, getData, message: 'success' });
        } catch (error) {
            response.send({ status: false, message: 'An Error Occured', error });
        }
    }
    async getUserDetailsByid(request, response, next) {
        try {
            let userId = request.body.userId;
            let getData = await UserModel.model.findOne({ _id: userId });
            response.send({ status: true, getData, message: 'success' });
        } catch (error) {
            response.send({ status: false, message: 'An Error Occured', error });
        }
    }
    async add_product(request, response, next) {
        try {
            let fileName = "";
            if (request.file?.filename) {
                fileName = request.file.filename;
            }


            let insertData = {
                productName: request.body.productName,
                productPrize: request.body.productPrize,
                productFileName: fileName
            }
            await ProductModel.insert(insertData)

            response.send({ status: true, message: 'success' });
        } catch (error) {
            response.send({ status: false, message: 'An Error Occured', error });
        }
    }

    //login
    
    async login(request, response, next) {
       let requestData=request.body;
       console.log(requestData)
       try{
       const user = await ProductModel.find({email:requestData.email,password:requestData.password})
       
       if(user){
        
        response.send({status:true, message: 'success'});
       }
        else{
            response.json("no record")
           
           }
             
    }catch(error) {
        response.send({status:false, message:'error',error});
}
}  
       //const token = jwtToken.sign({userid :user._id},process.env.JWT_SECRET);
       //response.json({msg:"login",token})
       
        
    
            
           
    

    async register(request,response,next){
        
            let insertData ={
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                email: request.body.email,
                password: request.body.password
            }
            try{
                await ProductModel.insert(insertData)

                 response.send({status:true, message: 'success',data:request.body});

            }catch(error) {
                 response.send({status:false, message:'error',error});
        }
    }

//chat1 
    async chat(request,response,next){
        
        let insertData1 ={
            msg:request.body.msg,
           
        }
        try{
            await data.insert(insertData1)

             response.send({status:true, message: 'success',data:request.body});

        }catch(error) {
             response.send({status:false, message:'error',error});
    }
}



//list data

async userlist(request, response, next) {
    try {

        let getuserlist = await ProductModel.getuserlist();
        //let userdata = [];
        //for (let userdata1 of getuserlist) {
            //userdata.push({
               // name: userdata1.firstname
            //})
        //}
        response.send({ status: true, message: 'success', userdata: getuserlist });
        //response.json(getuserlist)
    } catch (error) {
        response.send({ status: false, message: 'An Error Occured', error });
    }
}




async getuserlist(request, response, next) {
    try {

        let requestData = request.query;
        let  senderId= requestData.senderId;
       // letreceiverId= requestData.receiverId;

        l//letuserdata= await ProductModel.getUserListById(senderId,receiverd);




        //productData = { ...productData._doc, image: 'http://localhost:4000/uploads/products/' + productData.productFileName }


        response.send({ status: true, message: 'success', userdata: userdata });
    } catch (error) {
        response.send({ status: false, message: 'An Error Occured', error });
    }
}

}

     
export default new UserController();