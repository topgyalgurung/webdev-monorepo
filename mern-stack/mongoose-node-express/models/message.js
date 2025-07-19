var mongoose =require( 'mongoose');

const messageSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    //associate message with user
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
});

const Message=mongoose.model('Message',messageSchema);

module.exports= Message;