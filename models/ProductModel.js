import mongoose from 'mongoose';

const product = new mongoose.Schema({
    firstname: { type: String },  
    lastname: { type: String },
    email: { type: String },  
    password: { type: String },
 }, 
 {
        versionKey: false,
        timestamps: true
});

class productModelClass {

    constructor() {
        
        this.model = mongoose.model('users',product);  
        
    }
    async insert(objectDatas) {
        return await this.model.create(objectDatas);
    }
    async getuserlist() {                                
        return await this.model.find();
    }

    async find(data) {
        return await this.model.findOne(data);
    }   
}
export default new productModelClass();






