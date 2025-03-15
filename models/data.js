import mongoose from 'mongoose';


 const chat = new mongoose.Schema({
    
    msg :{type:String},
    receiverid:{type:string},
    //columns
    
}, {
    versionKey: false,
    timestamps: true
});


//group



class chatmodel {

    constructor() {
        this.model = mongoose.model('chatmessages', chat);
        
          
    }

    async insert(objectDatas) {
        return await this.model.create(objectDatas);
        
    }

    
  
}
export default new chatmodel();



